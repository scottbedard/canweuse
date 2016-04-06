//
// Boot up our application
//
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { redirects, routes } from 'app/routes';
import { config, before, after } from 'app/router';

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
Vue.http.options.emulateJSON = true;

require('app/boot');

//
// Configure the router
//
let Router = new VueRouter(config);
Router.map(routes);
Router.redirect(redirects);
Router.beforeEach(before);
Router.afterEach(after);

//
// Initialize the user's state, then start the app
//
import Root from './root';
import UserState from 'state/user';
UserState.init().then(() => Router.start(Root, '#app'));
