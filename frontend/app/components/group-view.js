import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editGroup() {
      this.set('isEdited', true);
    },

    saveEditedGroup(group) {
      this.get('store').updateGroup(group);
      this.set('isEdited', false);
    },

    deleteGroup(group) {
      this.get('store').deleteGroup(group);
    },
  },

  isEdited: false,

  store: Ember.inject.service()
});
