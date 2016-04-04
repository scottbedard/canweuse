<style lang="sass" scoped>@import 'core';
    table {
        margin: -12px 0;
        width: 100%;

        td {
            padding: 12px 0;
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
            <tbody>
                <tr v-for="project in projects">
                    <td>
                        <a v-link="{ name: 'projects-show' }" class="name">{{ project.name }}</a>
                        <div class="users">{{ project.users_count }} {{ project.users_count === 1 ? 'user' : 'users' }}</div>
                    </td>
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
        components: {
        },
    };
</script>
