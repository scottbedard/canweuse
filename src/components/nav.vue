<style lang="sass" scoped>

</style>

<template>
    <nav>
        <a v-link="{ name: 'signup' }" v-if="! UserState.isAuthenticated">Create an account</a>
        <ul v-else>
            <a href="#">{{ UserState.user.name }}</a>
            <a href="/logout">Log out</a>
        </ul>
    </nav>
</template>

<script>
    import UserState from 'state/user';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                UserState: UserState.state,
            };
        },
    };
</script>
