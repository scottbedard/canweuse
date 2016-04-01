module.exports = {

    /**
     * Redirects
     *
     * @type {Object}
     */
    redirects: {
        //
    },

    /**
     * Routes
     *
     * @type {Object}
     */
    routes: {

        //
        // Home
        //
        '/': {
            name: 'home',
            title: 'Can We Use',
            component: require('pages/home/home'),
        },

        //
        // Authentication
        //
        '/signup': {
            'name': 'signup',
            'title': 'Sign up',
            component: require('pages/signup/signup'),
            authentication: false,
        },

        //
        // 404
        //
        '*': {
            name: '404',
            title: '404',
            component: require('pages/404'),
        },
    },
};
