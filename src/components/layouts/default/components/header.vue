<style lang="sass" scoped>@import 'core';
    header {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @include bp-prop('height', 70px, 90px, 110px);
        @include transition('height');
    }

    a.logo {
        color: $site-font-color;
        @include bp-prop(font-size, 22px, 32px);
        @include transition('color, font-size');

        &:hover {
            text-decoration: none;
        }
    }

    .account {
        span.full { display: none }
        @include bp(large-phone) {
            span.mobile { display: none }
            span.full { display: inline }
        }
    }
</style>

<template>
    <header class="content margin padding">
        <a class="logo" v-link="{ name: 'home' }">can we use</a>
        <div class="account">
            <a href="/logout">
                <span class="mobile"><i class="fa fa-user"></i></span>
                <span class="full">Log out</span>
            </a>
        </div>
    </header>
</template>

<script>
    import UserState from 'state/user';

    module.exports = {
        data() {
            return {
                user: UserState.state,
            }
        }
    };
</script>
