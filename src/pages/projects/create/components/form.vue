<template>
    <form @submit.prevent="onFormSubmitted" novalidate>
        <div class="row">
            <div class="half field first">
                <label for="name">Google API Project Name</label>
                <small>Name you assigned when you created it in Google API Console.</small>
                <input id="name" type="text" v-model="name" v-el:first required>
            </div>
            <div class="half field">
                <label for="client-id">Google API Client ID</label>
                <small>This can be found on the project page in Google API Console.</small>
                <input id="client-id" type="text" v-model="clientId" required>
            </div>
        </div>
        <div class="row">
            <div class="half field">
                <label for="email">Google API Email</label>
                <small>Email address ending with "iam.gserviceaccount.com".</small>
                <input id="email" type="email" v-model="email" required>
            </div>
            <div class="half field">
                <label for="view-id">Google Analytics View ID</label>
                <small>You can find it on the Google Analytics Admin / View Settings page.</small>
                <input id="view-id" type="text" v-model="viewId" required>
            </div>
        </div>
        <div class="row">
            <div class="half field">
                <label for="window">Window size</label>
                <small>The number of days used to determine browser usage.</small>
                <input type="text" v-model="windowDays">
            </div>
            <div class="half field">
                <label for="support">Support threshold</label>
                <small>The minimum browser percentage your project will support.</small>
                <input type="text" v-model="threshold">
            </div>
        </div>
        <div class="row">
            <div class="full field">
                <label for="private-key">Google Services Private Key</label>
                <small>This key is how we'll authenticate your project with Google Analytics.</small>
                <v-file-upload
                    accept=".json"
                    :message="fileName"
                    :has-file="hasFile"
                    file-icon="fa-key"
                    @file-changed="onPrivateKeyChanged"
                    placeholder="Click to upload your private key">
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
    import Flash from 'state/flash_messages';
    import ProjectResource from 'resources/project';
    import FileUploadComponent from 'components/ui/file_upload';

    module.exports = {

        /**
         * @type {Array}
         */
        props: [
            'name',
            'clientId',
            'email',
            'viewId',
            'fileName',
            'privateKey',
            'windowDays',
            'threshold',
        ],

        /**
         * @return {Object}
         */
        data() {
            return {
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
             * Submit button text
             *
             * @return {Boolean}
             */
            buttonText() {
                return this.isLoading ? 'Creating...' : 'Create project';
            },

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

                let { name, clientId, email, viewId, trackingId, domain, windowDays, threshold, privateKey } = this;
                ProjectResource.create({ name, clientId, email, viewId, trackingId, domain, windowDays, threshold, privateKey })
                    .then(response => {
                        Flash.success('Project created!');
                        this.$router.go({ name: 'projects-list' });
                    })
                    .catch(message => Flash.error(message.data))
                    .then(() => this.isLoading = false);
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
