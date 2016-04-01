//
// Initialize the user's state
//
import UserState from 'state/user';
UserState.init();

//
// Plugins
//
require('./plugins/resources');

//
// Directives
//
require('./directives/linkable');

//
// Filters
//
require('./filters/moment');
