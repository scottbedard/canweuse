<template>
    <a href="/logout" class="btn btn-small btn-outlined-black icon-only-mobile">
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
