<style lang="sass">
    @import 'core';
    @import 'global';
</style>

<style lang="sass" scoped>
    .root { min-height: 100% }
</style>

<template>
    <div class="root">
        <component :is="App.layout"></component>
        <v-flash-messages></v-flash-messages>
    </div>
</template>

<script>
    import AppState from 'state/app';
    import BlankLayout from 'components/layouts/blank/blank'
    import DefaultLayout from 'components/layouts/default/default';
    import FlashMessagesComponent from 'components/flash_messages';

    module.exports = {

        /**
         * @return {Object}     Initial state
         */
        data() {
            return {
                App: AppState.state,
            };
        },

        /**
         * @type {Object}       Child components
         */
        components: {
            'default': DefaultLayout,
            'blank': BlankLayout,
            'v-flash-messages': FlashMessagesComponent,
        },
    };
</script>
