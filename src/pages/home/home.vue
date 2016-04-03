<style lang="sass" scoped>@import 'core';
    .auth-buttons {
        @include bp-prop(margin, -6px, -12px)
        @include transition(margin);
        a.btn {  @include bp-prop(margin, 6px, 12px) }
    }
</style>

<template>
    <main class="content margin padding">
        <section class="splash">
            <h1>Cross browser development just got easier.</h1>
            <p>Explore <a href="http://caniuse.com">Caniuse</a> through the lens of <a href="https://www.google.com/analytics/">Google Analytics</a></p>
            <div class="auth-buttons">
                <a href="/oauth/github" @click="oauth('github')" class="btn success">
                    <i class="fa" :class="{
                        'fa-github': !githubIsLoading,
                        'fa-refresh': githubIsLoading,
                        'fa-spin': githubIsLoading,
                    }"></i>
                    <span>{{ githubBtnText }}</span>
                </a>
            </div>
        </section>
    </main>
</template>

<script>
    import UserState from 'state/user';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                githubBtnText: 'Sign in with GitHub',
                githubIsLoading: false,
            };
        },

        /**
         * @type {Object}
         */
        route: {

            /**
             * Activate
             *
             * @param  {Function} options.next
             * @param  {Function} options.redirect
             * @return {void}
             */
            activate({ next, redirect }) {
                if (UserState.isAuthenticated()) {
                    redirect({ name: 'projects-list' });
                }

                next();
            },
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Update the OAuth button
             *
             * @param  {string} provider
             * @return {void}
             */
            oauth(provider) {
                this[provider + 'IsLoading'] = true;
                this[provider + 'BtnText'] = 'Authenticating...';
            },
        },
    };
</script>
