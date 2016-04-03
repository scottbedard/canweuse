<style lang="sass" scoped>
    a {
        align-items: center;
        display: flex;
        i { padding-left: 6px }
    }
</style>

<template>
    <nav>
        <a href="/logout" v-if="UserState.isAuthenticated">
            <span>{{ UserState.user.name }}</span>
            <i class="fa fa-chevron-down"></i>
        </a>
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
