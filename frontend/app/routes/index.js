import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createGroup(group) {
      this.get('store').saveGroup(jQuery.extend(true, {}, group));
      group.set('name', '');
      group.set('description', '');
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
    const store = this.get('store');
    return store.getGroups();
  },

  setupController(controller, model) {
    const store = this.get('store');

    controller.set('groups', model);
    controller.set('newGroup', store.newGroup());
    // this.store.findAll('tag').then(function(tags) {
    //   controller.set('tags', tags);
    // });
    // this.store.findAll('category').then(function(categories) {
    //   controller.set('categories', categories);
    // });
  },


  store: Ember.inject.service('store')
});
