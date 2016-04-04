<template>
    <main class="content margin padding">
        Hello
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
                project: {},
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
            }
        }
    };
</script>
