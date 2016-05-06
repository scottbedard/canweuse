import AppState from 'state/app';
import UserState from 'state/user';

//
// Config
//
module.exports = {

    /**
     * Config
     *
     * @type {Object}
     */
    config: {
        hashbang: false,
        history: true,
        saveScrollPosition: false,
    },

    /**
     * Before route starts transitioning
     *
     * @param  {Object}     options.from        Route we are transitioning from
     * @param  {Object}     options.to          Route we are transitioning to
     * @param  {Function}   options.next        Progress to the next step of the transition
     * @param  {Function}   options.abort       Cancel / reject the transition
     * @param  {Function}   options.redirect    Cancel and redirect to a different route
     * @return {void}
     */
    before({ from, to, next, abort, redirect }) {
        if (typeof to.auth === "boolean" && to.auth != UserState.isAuthenticated()) {
            abort();
            return;
        }

        let layout = to.layout || 'default';
        if (AppState.state.layout !== layout) {
            AppState.setLayout(layout);
        }

        next();
    },

    /**
     * After route has transitioned
     *
     * @param  {Object}     options.from        Route we are transitioning from
     * @param  {Object}     options.to          Route we are transitioning to
     * @return {void}
     */
    after({ from, to }) {
        if (typeof to.title !== 'undefined') {
            document.title = to.title;
        }

        if (typeof to.subtitle !== 'undefined') {
            AppState.setSubtitle(to.subtitle);
        }

        // Send the page view to Google Analytics
        ga('send', 'pageview', to.path);
    },
};
