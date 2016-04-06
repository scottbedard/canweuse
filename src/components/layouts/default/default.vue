<style lang="sass" scoped>@import 'core';
    header {
        display: flex;
        flex-direction: column;
        height: 100vh; // Avoid the IE 10-11 min-height bug
    }

    .v-header {
        flex-shrink: 0;
    }

    .v-router {
        flex: 1 0 auto;
        position: relative;
    }

    .v-footer {
        flex-shrink: 0;
    }
</style>

<template>
    <div>
        <v-header class="v-header"></v-header>
        <div class="v-router">
            <router-view transition="fade" transition-mode="out-in"></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './components/header';
    import FooterComponent from './components/footer';

    module.exports = {

        /**
         * @type {Object}       Child components
         */
        components: {
            'v-header': HeaderComponent,
            'v-footer': FooterComponent,
        },
    };
</script>
