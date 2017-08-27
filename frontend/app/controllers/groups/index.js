import Ember from 'ember';

export default Ember.Controller.extend({
  formIsActive: false,

  actions: {
    showForm() {
      this.set('formIsActive', true);
    },

    deleteTest(test) {
      this.get('store').deleteTest(test, (t) => { this.get('tests').popObject(t) });
    },

    addQuestion() {
      const emptyQuestion = this.get('store').getEmptyQuestion();
      this.get('newTest').questions_attributes.pushObject(emptyQuestion);
    },

    createTest(test) {
      this.get('store').createTest(test, (t) => { this.get('tests').unshiftObject(t) });
      this.set('formIsActive', false);
    },
  },

  store: Ember.inject.service()
});
