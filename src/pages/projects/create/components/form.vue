<template>
    <section>
        <form @submit.prevent="onFormSubmitted">
            <div class="row">
                <div class="half">
                    <label for="project-name">Google API Project Name</label>
                    <input id="project-name" type="text" v-model="projectName" v-el:first>
                </div>
                <div class="half">
                    <label for="client-id">Google API Client ID</label>
                    <input id="client-id" type="text" v-model="clientId">
                </div>
            </div>
            <div class="row">
                <div class="half">
                    <label for="email">Email address</label>
                    <input id="email" type="email" v-model="email">
                </div>
                <div class="half">
                    <label for="view-id">View ID</label>
                    <input id="view-id" type="text" v-model="viewId">
                </div>
            </div>
            <button type="submit" class="btn success">
                Create project
            </button>
        </form>
    </section>
</template>

<script>
    module.exports = {

        /**
         * @type {Array}
         */
        props: ['projectName', 'clientId', 'email', 'viewId'],

        /**
         * Focus the first form field when attached to the DOM
         *
         * @return {void}
         */
        attached() {
            this.$els.first.focus();
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Attempt to create the project
             *
             * @return {Object}
             */
            onFormSubmitted() {
                console.log ('aloha')
            },
        },
    };
</script>
