<style lang="sass" scoped>@import 'core';
    $circle-color: #999;

    a {
        align-items: center;
        border: none;
        color: $circle-color;
        display: flex;
        @include bp-prop(flex-direction, row, column);
        @include transition('border-color, color');

        &:not(:first-child) { margin-top: 6px }
        &:not(:last-child) { margin-bottom: 6px }

        &:hover, &.v-link-active {
            border-color: #000;
            color: #000;
            text-decoration: none;
        }
    }

    div {
        $mobile-radius: 45px;
        $tablet-radius: 70px;
        $desktop-radius: 90px;
        align-items: center;
        border: 1px solid;
        border-color: inherit;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        @include bp-prop(margin, 0 12px 0 0, 0 0 12px 0);
        @include transition('height, min-width, width');

        height: $mobile-radius;
        min-width: $mobile-radius;
        width: $mobile-radius;

        @include bp(tablet) {
            height: $tablet-radius;
            min-width: $tablet-radius;
            width: $tablet-radius;
        }

        @include bp(desktop) {
            height: $desktop-radius;
            min-width: $desktop-radius;
            width: $desktop-radius;
        }
    }

    span {
        @include bp-prop(text-align, left, center);
    }
</style>

<template>
    <a v-link="{ name: 'projects-create-step-' + step }">
        <div>{{ step }}</div>
        <span>{{ text }}</span>
    </a>
</template>

<script>
    module.exports = {

        /**
         * @type {Array}
         */
        props: ['step', 'text'],
    };
</script>
