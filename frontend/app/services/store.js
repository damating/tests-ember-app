import Ember from 'ember';

import Group from '../models/group';

const groups = [
                 { id: '1', name: 'Grupa1', description: 'Opis grupy 1' },
                 { id: '2', name: 'Grupa2', description: 'Opis grupy 2' }
               ];

export default Ember.Service.extend({
  getGroupById(id) {
    const groups = this.getGroups();
    return groups.findBy('id', id);
  },

  getGroups() { return groups; },

  newGroup() {
    return Group.create({name: '', description: ''})
  },

  saveGroup(group) {
    // TODO ajax here!
    group.set('id', 9999);
    groups.pushObject(group);
  },

  deleteGroup(group) {
    groups.popObject(group);
  },

  updateGroup(group) {
    // TODO ajax
  },
});
