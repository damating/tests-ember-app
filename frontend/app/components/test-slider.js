import Ember from 'ember';

export default Ember.Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    this.$('.svg-test').svgTimer({ direction: 'backward', time: this.test.duration_in_secs / 60 }, () => { this._targetObject.calculateTestPoints() });
  }
});
