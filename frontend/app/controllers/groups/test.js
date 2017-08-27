import Ember from 'ember';

export default Ember.Controller.extend({
  isSolving: true,
  points: 0,

  actions: {
    calculateTest() {
      this.get('store').calculateTest(this.get('test'), (result) => { this.getResult(result); });
    }
  },

  getResult(result) {
    this.set('isSolving', false);
    this.set('points', result["points"]);
  },

  store: Ember.inject.service()
});
