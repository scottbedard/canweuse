<style lang="sass" scoped>@import 'core';
    header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        @include bp-prop('height, line-height', 70px, 90px, 110px);
        @include transition('height, line-height');
    }

    a {
        color: $site-font-color;
        @include bp-prop(font-size, 22px, 32px);
        @include transition('color, font-size');

        &:hover {
            text-decoration: none;
        }
    }
</style>

<template>
    <header class="content margin padding">
        <a v-link="{ name: 'home' }">can we use</a>
    </header>
</template>

<script>
    module.exports = {

    };
</script>
