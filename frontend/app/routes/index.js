import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').getGroups();
  },

  setupController(controller, model) {
    const store = this.get('store');

    controller.set('groups', model["groups"]);
    controller.set('newGroup', store.newGroup());
  },

  store: Ember.inject.service('store')
});
