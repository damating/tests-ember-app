import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params.test_id;
  },

  setupController(controller, model) {
    const store = this.get('store');

    store.getTest(model, (result) => { controller.set('test', result); $(document).ready(function() { $('.questionSlider').slick(); }); });
  },

  store: Ember.inject.service()
});
