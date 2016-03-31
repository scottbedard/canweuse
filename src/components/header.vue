<style lang="sass" scoped>@import 'core';
     header {
        display: flex;

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
    <header>
        <a v-link="{ name: 'home' }">can we use</a>
        <div v-if="user.isAuthenticated">Is authenticated</div>
        <div v-else>Not authed</div>
    </header>
</template>

<script>
    import User from 'state/user';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                user: User.state,
            };
        },
    };
</script>
