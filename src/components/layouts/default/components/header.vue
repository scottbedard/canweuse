<style lang="sass" scoped>@import 'core';
    header {
        border-bottom: 1px solid #e0e0e0;
    }

    header > div {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    header,
    header > div {
        @include bp-prop('height', 70px, 90px, 110px);
        @include transition('height');
    }


    a.logo {
        color: $site-font-color;
        font-weight: 300;
        line-height: 30px;
        margin-top: -5px; // the logo is only capital letters
        @include bp-prop(font-size, 36px, 40px, 44px);
        @include transition('color, font-size');

        &:hover {
            text-decoration: none;
        }
    }
</style>

<template>
    <header>
        <div class="margin padding">
            <v-site-header></v-site-header>
            <v-account></v-account>
        </div>
    </header>
</template>

<script>
    import AccountComponent from 'components/account';
    import SiteHeaderComponent from 'components/site_header';

    module.exports = {

        /**
         * @type {Object}
         */
        components: {
            'v-site-header': SiteHeaderComponent,
            'v-account': AccountComponent,
        },
    };
</script>
