import Ember from 'ember';

export default Ember.Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    this.$('.svg-test').svgTimer({ direction: 'backward', time: this.test.duration_in_secs }, () => { this._targetObject.calculateTestPoints() });
  }
});
