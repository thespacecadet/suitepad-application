import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('what-is-this');
  this.route('who-am-i');
  this.route('how-did-i');
});

export default Router;
