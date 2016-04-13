<style lang="sass">@import 'core';
    .projects-create-page > .steps {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-basis: auto;
        @include bp-prop(margin, 12px 0, 24px 0);
        @include bp-prop(flex-direction, column, row);
        @include transition('margin');

        > a {
            @include bp-prop(width, 100%, 33.3333%);
        }
    }

    .projects-create-page li {
        @include bp-prop(padding-left, 6px, 12px);
        @include transition('padding-left');
    }

    .projects-create-page .guide-nav {
        text-align: center;

        a, button {
            &:first-child:last-child { @include bp-prop(margin, 24px, 36px) }
            &:first-child:not(:last-child) { @include bp-prop(margin, 24px 12px 12px, 36px 12px) }
            &:last-child:not(:first-child) { @include bp-prop(margin, 12px, 36px 12px) }
        }
    }
</style>

<template>
    <main class="projects-create-page content margin padding">
        <div class="steps">
            <v-circle step="1" text="Obtain a Client ID"></v-circle>
            <v-circle step="2" text="Configure Google Analytics"></v-circle>
            <v-circle step="3" text="Create project"></v-circle>
        </div>
        <div class="router-view">
            <router-view
                :name.sync="name"
                :client-id.sync="clientId"
                :view-id.sync="viewId"
                :email.sync="email"
                :file-name.sync="fileName"
                :private-key.sync="privateKey"
                :window-days.sync="windowDays"
                :threshold.sync="threshold"
                transition="fade"
                transition-mode="out-in">
            </router-view>
        </div>
    </main>
</template>

<script>
    import CircleComponent from './components/circle';

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
            'v-circle': CircleComponent,
        },
    };
</script>
