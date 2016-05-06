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
            subtitle: null,
            component: require('pages/home/home'),
            layout: 'blank',
        },

        //
        // Projects
        //
        '/projects': {
            name: 'projects-list',
            title: 'Projects',
            subtitle: null,
            component: require('pages/projects/index/projects_list'),
        },

        '/projects/create': {
            name: 'projects-create',
            title: 'Create project',
            subtitle: null,
            component: require('pages/projects/create/create'),
            auth: true,
            subRoutes: {
                '/step-1': {
                    name: 'projects-create-step-1',
                    subtitle: null,
                    component: require('pages/projects/create/components/step_one'),
                },
                '/step-2': {
                    name: 'projects-create-step-2',
                    subtitle: null,
                    component: require('pages/projects/create/components/step_two'),
                },
                '/step-3': {
                    name: 'projects-create-step-3',
                    subtitle: null,
                    component: require('pages/projects/create/components/step_three'),
                },
            },
        },

        '404': {
            name: '404',
            title: '404',
            subtitle: null,
            component: require('pages/404'),
        },

        '/:slug': {
            name: 'projects-show',
            component: require('pages/projects/show/projects_show'),
        },
    },
};
