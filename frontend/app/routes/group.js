import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const id = params.group_id;
    const store = this.get('store');
    return store.getGroupById(id);
  },

  store: Ember.inject.service()
});
