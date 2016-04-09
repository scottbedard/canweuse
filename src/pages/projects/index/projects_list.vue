<style lang="sass" scoped>@import 'core';
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: space-around;
        margin: 0;
        padding: 0;
    }

    li {
        flex-grow: 1;
        min-width: 100%;
        padding: 12px;
        text-align: center;
        @include bp(large-phone) { min-width: 50% }
        @include bp(tablet) { min-width: 33.3333% }
        @include bp(desktop) { min-width: 20% }
    }

    h3 {
        padding-bottom: 12px;
    }
</style>

<template>
    <main class="content margin padding">
        <header>
            <h1>Projects</h1>
            <a v-link="{ name: 'projects-create' }">New Project</a>
        </header>
        <ul class="projects">
            <li v-for="project in projects">
                <a v-link="{ name: 'projects-show' }">
                    <h3>{{ project.name }}</h3>
                    <v-donut-chart
                        height="150"
                        width="150"
                        :chart-data="getChartData(project)">
                    </v-donut-chart>
                </a>
            </li>
        </ul>
    </main>
</template>

<script>
    import ProjectResource from 'resources/project';
    import DonutChart from 'components/charts/donut';

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
        components: {
            'v-donut-chart': DonutChart,
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
             * Parse the data needed for the donut charts
             *
             * @return {Object}
             */
            getChartData(project) {
                let data = {};
                for (let browser of Object.keys(project.supported_browsers)) {
                    data[browser] = 0;
                    for (let version of project.supported_browsers[browser]) {
                        data[browser] += version.users;
                    }
                }

                return data;
            },
        },
    };
</script>
