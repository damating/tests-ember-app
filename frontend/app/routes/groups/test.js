import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    debugger
    return params.test_id;
  },
});
