import Ember from 'ember';

export default Ember.Controller.extend({
  formIsActive: false,

  actions: {
    showForm() {
      this.set('formIsActive', true);
    },

    deleteTest(test) {
      this.get('store').deleteTest(test);
      this.get('tests').popObject(test);
    }
  },

  store: Ember.inject.service()
});
