import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('block', { path: 'block/:id' });
  this.route('transaction', { path: 'tx/:id'});
  this.route('account', { path: 'account/:id'});
});

export default Router;
