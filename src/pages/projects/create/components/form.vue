<template>
    <form @submit.prevent="onFormSubmitted">
        <div class="row">
            <div class="half field first">
                <label for="project-name">Google API Project Name</label>
                <input id="project-name" type="text" v-model="projectName" v-el:first required>
            </div>
            <div class="half field">
                <label for="client-id">Google API Client ID</label>
                <input id="client-id" type="text" v-model="clientId" required>
            </div>
        </div>
        <div class="row">
            <div class="half field">
                <label for="email">Email address</label>
                <input id="email" type="email" v-model="email" required>
            </div>
            <div class="half field">
                <label for="view-id">View ID</label>
                <input id="view-id" type="text" v-model="viewId" required>
            </div>
        </div>

        <div class="row">
            <div class="full field">
                <label for="private-key">Google Analytics key</label>
                <v-file-upload
                    accept=".json"
                    :message="fileName"
                    :has-file="hasFile"
                    @file-changed="onPrivateKeyChanged"
                    placeholder="Upload your Google Services key">
                </v-file-upload>
            </div>
        </div>
        <div class="guide-nav">
            <a v-link="{ name: 'projects-create-step-2' }" class="btn" :class="{ 'collapse': isSending }">
                <i class="fa fa-angle-left"></i>
                <span>Go Back</span>
            </a>
            <button type="submit" class="btn success">
                <i class="fa fa-refresh fa-spin" v-if="isLoading"></i>
                {{ buttonText }}
            </button>
        </a>
    </form>
</template>

<script>
    import ProjectResource from 'resources/project';
    import FileUploadComponent from 'components/ui/file_upload';

    module.exports = {

        /**
         * @type {Array}
         */
        props: ['projectName', 'clientId', 'email', 'viewId', 'fileName', 'privateKey'],

        /**
         * @return {Object}
         */
        data() {
            return {
                buttonText: 'Create project',
                isLoading: false,
            };
        },

        /**
         * @type {Array}
         */
        components: {
            'v-file-upload': FileUploadComponent,
        },

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
        computed: {

            /**
             * Determine if the we have a file
             *
             * @return {Boolean}
             */
            hasFile() {
                return this.fileName.length > 0;
            },
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Submit the form
             *
             * @return {void}
             */
            onFormSubmitted() {
                this.isLoading = true;
                this.buttonText = 'Creating...';

                let { projectName, clientId, email, viewId, trackingId, domain, privateKey } = this;
                ProjectResource.create({ projectName, clientId, email, viewId, trackingId, domain, privateKey });
            },

            /**
             * Set the private key
             *
             * @param  {Object} options.file
             * @param  {String} options.text
             * @return {void}
             */
            onPrivateKeyChanged({ file, text }) {
                this.privateKey = text;
                this.fileName = file !== null ? file.name : '';
            },
        },
    };
</script>
