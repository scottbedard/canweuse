<style lang="sass" scoped>@import 'core';
    table {
        margin: -12px 0;
        width: 100%;

        th {
            font-weight: 300;
            &:first-of-type { text-align: left }
        }
        td {
            padding: 12px 0;
            &.centered { text-align: center }
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
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>IE</th>
                    <th>Edge</th>
                    <th>Safari</th>
                    <th>Firefox</th>
                    <th>Chrome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects">
                    <td>
                        <a v-link="{ name: 'projects-show', params: { 'slug': project.slug } }" class="name">{{ project.name }}</a>
                        <div class="users">{{ project.users_count }} {{ project.users_count === 1 ? 'user' : 'users' }}</div>
                    </td>
                    <td class="centered">{{ getSupportedVersion(project, 'Internet Explorer') }}</td>
                    <td class="centered">{{ getSupportedVersion(project, 'Edge') }}</td>
                    <td class="centered">{{ getSupportedVersion(project, 'Safari') }}</td>
                    <td class="centered">{{ getSupportedVersion(project, 'Firefox') }}</td>
                    <td class="centered">{{ getSupportedVersion(project, 'Chrome') }}</td>
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
                    projects: ProjectResource.get(),
                });
            },
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Determine which version of the browser is currently supported
             *
             * @param  {String} browser
             * @return {Number}
             */
            getSupportedVersion(project, browser) {

                let supportThreshold = project.threshold;
                console.log (project.browser_data)
                return 0;
            },
        },
    };
</script>
