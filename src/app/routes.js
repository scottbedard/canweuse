module.exports = {

    /**
     * Redirects
     *
     * @type {Object}
     */
    redirects: {
        '/projects/create': '/projects/create/obtain-client-id',
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
        // Projects
        //
        '/projects': {
            name: 'projects-list',
            title: 'Projects',
            component: require('pages/projects/index/projects_list'),
        },

        '/projects/:id': {
            name: 'projects-show',
            component: require('pages/projects/show/projects_show'),
        },

        '/projects/create': {
            name: 'projects-create',
            title: 'Create project',
            component: require('pages/projects/create/create'),
            auth: true,
            subRoutes: {
                '/obtain-client-id': {
                    name: 'projects-create-step-1',
                    component: require('pages/projects/create/components/obtain_client_id'),
                },
                '/config-google-analytics': {
                    name: 'projects-create-step-2',
                    component: require('pages/projects/create/components/config_google_analytics'),
                },
                '/form': {
                    name: 'projects-create-form',
                    component: require('pages/projects/create/components/form'),
                },
            },
        },

        // //
        // // Authentication
        // //
        // '/signup': {
        //     'name': 'signup',
        //     'title': 'Sign up',
        //     component: require('pages/signup/signup'),
        //     auth: false,
        // },

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
