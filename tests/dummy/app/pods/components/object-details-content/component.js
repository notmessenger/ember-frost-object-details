import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import {computed, readOnly} from 'ember-decorators/object'
import layout from './template'

export default Component.extend({
  layout,
  @readOnly
  @computed('color')
  get colorStyle () {
    const style = [
      `background-color:${this.get('color')}`,
      'height: 200px'
    ]
      .join(';')
    return htmlSafe(style);
  }
})
