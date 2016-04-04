<template>
    <main class="content margin padding">
        <v-pie-chart :chart-data="chartData"></v-pie-chart>
    </main>
</template>

<script>
    import ProjectResource from 'resources/project';
    import BrowserColors from 'app/static/browser_colors';
    import PieChartComponent from 'components/charts/pie';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                project: {
                    browser_data: [],
                },
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
                    project: ProjectResource.get(this.$route.params),
                });
            },
        },

        /**
         * @type {Object}
         */
        components: {
            'v-pie-chart': PieChartComponent,
        },

        /**
         * @type {Object}
         */
        computed: {

            /**
             * Compute the pie chart data
             *
             * @return {Array}
             */
            chartData() {
                let chart = [];
                let browsers = this.getBrowserData();

                for (let browser in browsers) {
                    chart.push({
                        label: browser,
                        value: browsers[browser],
                        color: BrowserColors(browser),
                    });
                }

                chart.sort((a, b) => a.value - b.value);
                return chart;
            },
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Calculates the browser usages
             *
             * @return {Object}
             */
            getBrowserData() {
                let browserUsage = {};
                for (let browser in this.project.browser_data) {
                    browserUsage[browser] = 0;
                    for (let versionUsage of Object.keys(this.project.browser_data[browser])) {
                        browserUsage[browser] += parseInt(versionUsage);
                    }
                }

                return browserUsage
            }
        }
    };
</script>
