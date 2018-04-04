import Component from '@ember/component';
import { isEmpty } from '@ember/utils';
import { on } from '@ember/object/evented';
import layout from '../templates/components/frost-object-tab'
import {computed, readOnly} from 'ember-decorators/object'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

export default Component.extend(PropTypesMixin, {
  // == Component properties ==================================================

  layout,
  classNames: ['frost-object-tab'],

  // == State properties ======================================================
  type: 'tab',

  propTypes: {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.EmberObject,
      PropTypes.object
    ]).isRequired,
    // Set by the parent component
    selectedTabId: PropTypes.string.isRequired,
    selectedTabType: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    parentHook: PropTypes.string,
    register: PropTypes.func,
    targetOutlet: PropTypes.string,
    defaultTabId: PropTypes.string
  },

  init () {
    // This needs to be setup outside of ember-prop-types getDefaultProps() because it does not work
    // within the timing of tests
    this.set('hook', `${this.parentHook}-${this.id}`)
    this._super(...arguments)
  },

  // == Computed properties ===================================================

  @readOnly
  @computed('selectedTabId', 'defaultTabId', 'selectedTabType')
  get isSelected () {
    const selectedTabId = this.get('selectedTabId')
    const tabId = this.id

    return tabId === selectedTabId ||
      (
        (isEmpty(selectedTabId) || isEmpty(this.get('selectedTabType'))) &&
        tabId === this.get('defaultTabId')
      )
  },

  @readOnly
  @computed('isSelected', 'selectedTabType', 'type', 'id', 'defaultTabId')
  get isDefault () {
    return !this.get('isSelected') &&
      this.get('selectedTabType') !== this.get('type') &&
      this.get('id') === this.get('defaultTabId')
  },

  // == Events ================================================================

  /**
   * Register the id and type of the tab during init.
   */
  _register: on('init', function () {
    if (typeof this.register === 'function') {
      this.register(this.id, this.type)
    }
  }),

  // == Actions ===============================================================

  actions: {
    change () {
      if (this.onChange) {
        this.onChange(this.id, this.type)
      }
    }
  }
})
