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
            component: require('pages/home/index'),
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
