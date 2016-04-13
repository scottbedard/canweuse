<style lang="sass" scoped>@import 'core';
    i {
        margin-right: 0 !important;
    }

    span {
        display: none;
        padding-left: 6px;
        @include bp(large-phone) { display: inline }
    }
</style>

<template>
    <a href="/logout" class="btn btn-small btn-outlined-gray">
        <i class="fa fa-user"></i>
        <span>{{ user.user.name }}</span>
    </a>
</template>

<script>
    import UserState from 'state/user';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                user: UserState.state,
            };
        },
    };
</script>
