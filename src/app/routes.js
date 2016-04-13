module.exports = {

    /**
     * Redirects
     *
     * @type {Object}
     */
    redirects: {
        '/projects/create': '/projects/create/step-1',
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
            layout: 'blank',
        },

        //
        // Projects
        //
        '/projects': {
            name: 'projects-list',
            title: 'Projects',
            component: require('pages/projects/index/projects_list'),
        },

        '/projects/:slug': {
            name: 'projects-show',
            component: require('pages/projects/show/projects_show'),
        },

        '/projects/create': {
            name: 'projects-create',
            title: 'Create project',
            component: require('pages/projects/create/create'),
            auth: true,
            subRoutes: {
                '/step-1': {
                    name: 'projects-create-step-1',
                    component: require('pages/projects/create/components/step_one'),
                },
                '/step-2': {
                    name: 'projects-create-step-2',
                    component: require('pages/projects/create/components/step_two'),
                },
                '/step-3': {
                    name: 'projects-create-step-3',
                    component: require('pages/projects/create/components/step_three'),
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
