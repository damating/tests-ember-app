import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const id = params.group_id;
    const store = this.get('store');
    // return store.getGroupById(id);
    return store.getTests(id);
  },

  setupController(controller, model) {
    const store = this.get('store');

    controller.set('tests', model);
    controller.set('newTest', store.newTest());
  },

  store: Ember.inject.service()
});
