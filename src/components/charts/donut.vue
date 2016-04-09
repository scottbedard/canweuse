<template>
    <canvas v-el:canvas></canvas>
</template>

<script>
    import Chart from 'chart.js';
    import { browserColors } from 'app/static/browser_colors';

    module.exports = {

        /**
         * @type {Object}
         */
        props: {
            chartData: { type: Object },
        },

        /**
         * Render the chart
         *
         * @return {void}
         */
        ready() {
            let data = this.parseChartData();
            let ctx = this.$els.canvas.getContext("2d");
            let chart = new Chart(ctx).Doughnut(data, {
                animateScale: false,
                animateRotate: false,
                segmentStrokeWidth: 2,
                segmentShowStroke: true,
                percentageInnerCutout: 80,
                segmentStrokeColor: "#fff",
            });
        },

        methods: {
            parseChartData() {
                let data = [];
                if (typeof this.chartData['Safari'] !== 'undefined') {
                    data.push({
                        label: 'Safari',
                        value: this.chartData['Safari'],
                        color: browserColors['Safari'],
                    });
                }

                if (typeof this.chartData['Chrome'] !== 'undefined') {
                    data.push({
                        label: 'Chrome',
                        value: this.chartData['Chrome'],
                        color: browserColors['Chrome'],
                    });
                }

                if (typeof this.chartData['Firefox'] !== 'undefined') {
                    data.push({
                        label: 'Firefox',
                        value: this.chartData['Firefox'],
                        color: browserColors['Firefox'],
                    });
                }

                if (typeof this.chartData['Internet Explorer'] !== 'undefined') {
                    data.push({
                        label: 'Internet Explorer',
                        value: this.chartData['Internet Explorer'],
                        color: browserColors['Internet Explorer'],
                    });
                }

                if (typeof this.chartData['Edge'] !== 'undefined') {
                    data.push({
                        label: 'Edge',
                        value: this.chartData['Edge'],
                        color: browserColors['Edge'],
                    });
                }

                return data;
            }
        }
    };
</script>
