import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params.group_id;
  },

  setupController(controller, model) {
    const store = this.get('store');

    controller.set('groupId', model);
    store.getTests(model, (result) => { controller.set('tests', result["tests"]) });
    controller.set('newTest', store.newTest(model));
  },

  store: Ember.inject.service()
});
