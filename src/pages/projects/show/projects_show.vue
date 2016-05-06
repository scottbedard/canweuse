<template>
    <main class="content margin padding">
        <h1>{{ project.name }}</h1>
    </main>
</template>

<script>
    import AppState from 'state/app';
    import ProjectResource from 'resources/project';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                project: [],
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
                let { slug } = this.$route.params;
                AppState.setSubtitle(slug);

                return this.$resources({
                    project: ProjectResource.get({ slug }),
                });
            },
        },
    };
</script>
