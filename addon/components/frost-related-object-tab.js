import Component from '@ember/component';
import layout from '../templates/components/frost-related-object-tab'
import {computed} from 'ember-decorators/object'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

export default Component.extend(PropTypesMixin, {
  // == Component properties ==================================================

  layout,
  classNames: ['frost-related-object-tab'],

  // == State properties ======================================================
  type: 'relatedObjectTab',

  propTypes: {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.EmberObject,
      PropTypes.object
    ]).isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.EmberObject,
      PropTypes.object
    ]),
    // Set by the parent component
    selectedTabId: PropTypes.string.isRequired,
    selectedTabType: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    parentHook: PropTypes.string,
    targetOutlet: PropTypes.string
  },

  init () {
    // This needs to be setup outside of ember-prop-types getDefaultProps() because it does not work
    // within the timing of tests
    this.set('hook', `${this.parentHook}-${this.id}`)
    this._super(...arguments)
  },

  // == Computed properties ===================================================

  @computed('selectedTabId')
  get isSelected () {
    return this.id === this.get('selectedTabId')
  },

  // == Actions ===============================================================

  actions: {
    change () {
      if (this.onChange) {
        this.onChange(this.id, this.type)
      }
    }
  }
})
