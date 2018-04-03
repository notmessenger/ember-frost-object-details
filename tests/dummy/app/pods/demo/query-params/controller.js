import Controller from '@ember/controller';

// BEGIN-SNIPPET query-params-controller
export default Controller.extend({
  queryParams: ['selectedTabId', 'selectedTabType'],
  selectedTabId: 'profile',
  selectedTabType: 'tab',
  actions: {
    onChange (id, type) {
      this.set('selectedTabId', id)
      this.set('selectedTabType', type)
    }
  }
})
// END-SNIPPET
