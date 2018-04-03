import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onChange (id, type) {
      this.set('selectedTabId', id)
      this.set('selectedTabType', type)
    }
  }
})
