<style lang="sass">@import 'core';
    .projects-create-page > .steps {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 24px 0;
        @include bp(large-phone) { flex-direction: row }

        a {
            color: #ccc;
            text-align: center;

            > div {
                align-items: center;
                border-color: #ccc;
                border-radius: 50px;
                border: 1px solid;
                display: none;
                justify-content: center;
                margin: 0 auto 12px auto;
                position: relative;
                @include bp-prop(height, 75px, 100px);
                @include bp-prop(width, 75px, 100px);
                @include bp(large-phone) { display: flex }
                @include transition('border-color, height, width');
            }

            &:hover {
                color: #666;
                > div { border-color: #666 }
            }

            &.v-link-active {
                color: #333;
                > div { border-color: #333 }
            }
        }
    }

    .guide-nav {
        text-align: center;
        a, button {
            margin-top: 24px;
            @include bp(large-phone) { margin: 48px 12px }
        }
    }
</style>

<template>
    <main class="projects-create-page content margin padding">
        <div class="steps padding">
            <a v-link="{ name: 'projects-create-step-1' }">
                <div>1</div>
                <span>Obtain a Client ID</span>
            </a>
            <a v-link="{ name: 'projects-create-step-2' }">
                <div>2</div>
                <span>Configure Google Analytics</span>
            </a>
            <a v-link="{ name: 'projects-create-form' }">
                <div>3</div>
                <span>Create project</span>
            </a>
        </div>
        <div class="router-view">
            <router-view
                :name.sync="name"
                :client-id.sync="clientId"
                :view-id.sync="viewId"
                :email.sync="email"
                :file-name.sync="fileName"
                :private-key.sync="privateKey"
                :window-days="windowDays"
                :threshold="threshold"
                transition="fade"
                transition-mode="out-in">
            </router-view>
        </div>
    </main>
</template>

<script>
    import ProjectResource from 'resources/project';
    import ObtainClientIdComponent from './components/obtain_client_id';
    import ConfigGoogleAnalyticsComponent from './components/config_google_analytics';
    import FormComponent from './components/form';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {

            // Form data is stored here, then passed to the form component with
            // synchronized props. This will allow the user to refer back to
            // the project guide without accidentally clearing their form.
            return {
                name: '',
                clientId: '',
                email: '',
                viewId: '',
                trackingId: '',
                domain: '',
                privateKey: '',
                fileName: '',
                windowDays: 100,
                threshold: 1,
            };
        },

        /**
         * @type {Object}
         */
        components: {
            'v-obtain-client-id': ObtainClientIdComponent,
            'v-config-google-analytics': ConfigGoogleAnalyticsComponent,
            'v-form': FormComponent,
        },
    };
</script>
