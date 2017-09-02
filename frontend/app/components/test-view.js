import Ember from 'ember';

export default Ember.Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    $(document).ready(() => { $('.questionSlider').slick(); });
  },
});
