import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params.test_id;
  },

  setupController(controller, model) {
    const store = this.get('store');

    store.getTest(model, (result) => { controller.set('test', result); });
  },

  store: Ember.inject.service()
});
