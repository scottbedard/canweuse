<style lang="sass" scoped>@import 'core';
     header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dfdfdf;
        @include bp-prop(height, 65px, 80px, 120px);

        //
        // Logo
        //
        > a {
            font-size: 32px;
            margin: 24px;
        }
     }
</style>

<template>
    <header class="margin">
        <a v-link="{ name: 'home' }">can we use</a>
        <v-nav class="v-nav"></v-nav>
    </header>
</template>

<script>
    import NavComponent from './nav';

    module.exports = {

        /**
         * @type {Object}
         */
        components: {
            'v-nav': NavComponent,
        },
    };
</script>
