<style lang="sass" scoped>@import 'core';
    div.projects {
        display: table;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;

        //
        // Row
        //
        > .row {
            display: table-row;
            &:not(:first-child) > div { padding-top: 12px }
            &:not(:last-child) > div {
                border-bottom: 1px solid #ddd;
                padding-bottom: 12px;
            }

            > div {
                display: table-cell;
                vertical-align: middle;

                &.chart {
                    text-align: center;
                    width: 50px;
                }

                &.project {
                    @include bp-prop(padding-left, 6px, 12px);
                    @include transition(padding-left);
                }

                &.browser {
                    display: none;
                    @include bp(large-phone) { &.firefox, &.chrome, &.safari { display: table-cell }}
                    @include bp(tablet) { &.edge { display: table-cell }}
                    @include bp(desktop) { &.ie, &.opera { display: table-cell }}

                    span { @include bp-prop(display, none, inline) }

                    i.fa {
                        color: #666;
                        @include bp-prop(display, inline, none);
                    }
                }
            }
        }

        div.browser {
            text-align: center;
        }

        //
        // Cell
        //
        div {
            display: flex;
            align-items: center;
        }
    }

    li {

    }
</style>

<template>
    <main class="content margin padding">
        <header>
            <h1>Projects</h1>
            <a v-link="{ name: 'projects-create' }" class="btn btn-small btn-outlined-black icon-only-mobile">
                <i class="fa fa-plus"></i>
                <span>New Project</span>
            </a>
        </header>
        <div class="projects">
            <div class="row headers">
                <div></div>
                <div class="project"></div>
                <div class="browser ie"><span>IE</span><i class="fa fa-internet-explorer"></i></div>
                <div class="browser edge"><span>Edge</span><i class="fa fa-edge"></i></div>
                <div class="browser firefox"><span>Firefox</span><i class="fa fa-firefox"></i></div>
                <div class="browser chrome"><span>Chrome</span><i class="fa fa-chrome"></i></div>
                <div class="browser safari"><span>Safari</span><i class="fa fa-safari"></i></div>
                <div class="browser opera"><span>Opera</span><i class="fa fa-opera"></i></div>
            </div>
            <a
                class="row"
                v-for="project in projects"
                v-link="{ name: 'projects-show', params: { slug: project.slug }}">
                <div class="chart">
                    <v-donut-chart
                        height="50"
                        width="50"
                        class="v-donut-chart"
                        :chart-data="getChartData(project)">
                    </v-donut-chart>
                </div>
                <div class="project">{{ project.name }}</div>
                <div class="browser ie">{{ getLowestSupportedVersion(project, 'IE') }}</div>
                <div class="browser edge">{{ getLowestSupportedVersion(project, 'Edge') }}</div>
                <div class="browser firefox">{{ getLowestSupportedVersion(project, 'Firefox') }}</div>
                <div class="browser chrome">{{ getLowestSupportedVersion(project, 'Chrome') }}</div>
                <div class="browser safari">{{ getLowestSupportedVersion(project, 'Safari') }}</div>
                <div class="browser opera">{{ getLowestSupportedVersion(project, 'Opera') }}</div>
            </a>
        </div>
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

            /**
             * Returns the lowest supported version of a given browser
             *
             * @param  {Object} project
             * @param  {String} browser
             * @return {String}
             */
            getLowestSupportedVersion(project, browser) {
                let version = ProjectResource.getLowestSupportedVersion(project, browser);
                if (version !== 'Unknown') version += '+';
                return version;
            }
        },
    };
</script>
