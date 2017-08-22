import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      this.get('test').questions.removeObject(question);
    },

    addOption() {
      const emptyOption = this.get('store').getEmptyOption();
      this.get('question').question_options.pushObject(emptyOption);
    },

    deleteOption(option) {
      this.get('question').question_options.removeObject(option);
    },
  },

  store: Ember.inject.service()
});
