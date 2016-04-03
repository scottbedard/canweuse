<style lang="sass">
    @import 'core';
    @import 'global';
</style>

<template>
    <div>
        <v-header class="v-header"></v-header>
        <div class="v-router">
            <router-view transition="fade" transition-mode="out-in"></router-view>
        </div>
        <v-footer class="v-footer"></v-footer>
        <v-flash-messages></v-flash-messages>
    </div>
</template>

<script>
    import HeaderComponent from 'components/header';
    import FooterComponent from 'components/footer';
    import FlashMessagesComponent from 'components/flash_messages';

    module.exports = {

        /**
         * @type {Object}
         */
        components: {
            'v-header': HeaderComponent,
            'v-footer': FooterComponent,
            'v-flash-messages': FlashMessagesComponent,
        },
    };
</script>
