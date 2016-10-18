import frostLink from 'ember-frost-core/components/frost-link'
import layout from '../templates/components/frost-related-object-tab-link'
import { PropTypes } from 'ember-prop-types'

const FrostRelatedObjectTabLink = frostLink.extend({
  // == Component properties ==================================================

  layout: layout,
  classNames: ['frost-related-object-tab-link'],
  classNameBindings: ['isSelected'],

  // == State properties ======================================================

  propTypes: {
    hook: PropTypes.string,
    icon: PropTypes.string,
    pack: PropTypes.string,
    isSelected: PropTypes.bool
  }
})

export default FrostRelatedObjectTabLink