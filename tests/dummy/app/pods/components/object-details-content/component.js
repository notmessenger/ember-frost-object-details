import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import computed, { readOnly } from 'ember-computed-decorators'
import layout from './template'

export default Component.extend({
  layout,
  @readOnly
  @computed('color')
  colorStyle (color) {
    const style = [
      `background-color:${color}`,
      'height: 200px'
    ]
      .join(';')
    return htmlSafe(style);
  }
})
