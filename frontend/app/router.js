import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('groups', function() {
    this.route('index', { path: '/:group_id' });
    this.route('test', { path: '/:group_id/tests/:test_id' });
  });
});

export default Router;
