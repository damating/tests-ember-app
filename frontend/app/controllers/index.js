import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGroup(group) {
      this.get('store').saveGroup(group, (g) => { this.get('groups').unshiftObject(g) });
      this.get('newGroup').set('name', '');
      this.get('newGroup').set('description', '');
    }
  },

  store: Ember.inject.service()
});
