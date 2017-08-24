import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createGroup(group) {
      // this.get('store').saveGroup(jQuery.extend(true, {}, group));

      // TO DO create controller to get access to this.get('groups')
      this.get('store').saveGroup(group, (x) => { this.get('groups').unshiftObject(x) });
      this.get('newGroup').set('name', '');
      // group.set('name', '');
      // group.set('description', '');
      // this.get('groups').unshiftObject(group);
    }

    // editGroup(group) {
    //   // group.isEdited = true;
    //   group.set('isEdited', true);
    // },

    // saveEditedGroup(group) {
    //   group.set('isEdited', false);
    //   console.log('save');
    // },
  },

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
