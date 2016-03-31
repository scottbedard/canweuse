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
    </div>
</template>

<script>
    import User from 'state/user';
    import HeaderComponent from 'components/header';
    import FooterComponent from 'components/footer';

    module.exports = {

        /**
         * @type {Object}
         */
        components: {
            'v-header': HeaderComponent,
            'v-footer': FooterComponent,
        },

        /**
         * Initialize the user's state
         *
         * @return {void}
         */
        created() {
            User.init();
        },
    };
</script>
