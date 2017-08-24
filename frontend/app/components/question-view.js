import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      this.get('test').questions_attributes.removeObject(question);
    },

    addOption() {
      const emptyOption = this.get('store').getEmptyOption();
      this.get('question').question_options_attributes.pushObject(emptyOption);
    },

    deleteOption(option) {
      this.get('question').question_options_attributes.removeObject(option);
    },
  },

  store: Ember.inject.service()
});
