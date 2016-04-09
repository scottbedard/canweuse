<style lang="sass" scoped>@import 'core';
    table {
        margin: -12px 0;
        width: 100%;

        th {
            font-weight: 300;
        }

        td {
            padding: 12px 0;
        }

        .project {
            text-align: left;
        }

        .browser {
            text-align: center;
            width: 15%;
        }
    }
</style>

<template>
    <main class="content margin padding">
        <header>
            <div>Projects</div>
            <a v-link="{ name: 'projects-create' }">
                <span>Create project</span>
            </a>
        </header>
        <p v-if="projects.length === 0">
            You haven't made any projects yet.
        </p>
        <table v-else>
            <thead>
                <tr>
                    <th class="project">Name</th>
                    <th class="browser">IE</th>
                    <th class="browser">Edge</th>
                    <th class="browser">Safari</th>
                    <th class="browser">Firefox</th>
                    <th class="browser">Chrome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects">
                    <td class="project">
                        <a v-link="{ name: 'projects-show', params: { 'slug': project.slug } }" class="name">{{ project.name }}</a>
                        <div class="users">{{ project.users_count }} {{ project.users_count === 1 ? 'user' : 'users' }}</div>
                    </td>
                    <td class="browser">{{ getLowestSupportedVersion(project, 'Internet Explorer') }}</td>
                    <td class="browser">{{ getLowestSupportedVersion(project, 'Edge') }}</td>
                    <td class="browser">{{ getLowestSupportedVersion(project, 'Safari') }}</td>
                    <td class="browser">{{ getLowestSupportedVersion(project, 'Firefox') }}</td>
                    <td class="browser">{{ getLowestSupportedVersion(project, 'Chrome') }}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
    import ProjectResource from 'resources/project';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                projects: [],
            };
        },

        /**
         * @type {Object}
         */
        route: {

            /**
             * @type {Boolean}
             */
            waitForData: true,

            /**
             * Fetch route data
             *
             * @param  {Object}     transition
             * @return {Promise}
             */
            data(transition) {
                return this.$resources({
                    projects: ProjectResource.get().then(response => this.parse(response)),
                });
            },
        },


        /**
         * @type {Object}
         */
        methods: {

            /**
             * Parse response data
             *
             * @param  {Object}     response
             * @return {Promise}
             */
            parse(response) {
                return new Promise(resolve => {
                    response.data = response.data.map(project => {
                        project.browser_data = JSON.parse(project.browser_data);
                        return project;
                    });

                    resolve(response);
                });
            },

            /**
             * Determine which version of the browser is currently supported
             *
             * @param  {String} browser
             * @return {Number}
             */
            getLowestSupportedVersion(project, browser) {
                if (typeof project.supported_browsers[browser] === 'undefined') {
                    return 'No users';
                }

                console.log (project);

                let lowest = false;
                project.supported_browsers[browser].forEach(({ version }) => {
                    if (version < lowest || lowest === false) {
                        lowest = version;
                    }
                });

                return lowest;
            },
        },
    };
</script>
