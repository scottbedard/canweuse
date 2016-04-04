<template>
    <div>
        <canvas width="400" height="400" v-el:chart></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js/chart.js';

    module.exports = {

        /**
         * @type {Object}
         */
        props: {
            chartData: {
                type: Array,
                default() {
                    return { };
                },
            },
        },

        /**
         * Render the chart
         *
         * @return {void}
         */
        ready() {
            let ctx = this.$els.chart.getContext("2d");
            let chart = new Chart(ctx).Doughnut(this.chartData);
        }
    };
</script>
