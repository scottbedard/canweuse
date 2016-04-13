<style lang="sass" scoped>@import 'core';
    .outer {
        display: flex;
        justify-content: center;
        min-height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .inner {
        align-self: center;
        text-align: center;

        @include bp('min-height: 769px') {
            align-self: flex-start;
            margin-top: 60px;
        }

        > * {
            margin-bottom: 30px;
            @include bp('min-height: 580px') { margin-bottom: 45px }
            @include bp('min-height: 769px') { margin-bottom: 60px }
            @include transition('font-size, margin-bottom');
        }

        h1 { @include bp-prop(font-size, 50px, 60px) }
        h2 { @include bp-prop(font-size, 26px) }
    }
</style>

<template>
    <div class="outer">
        <div class="inner padding">
            <h1>Cross browser development just got easier</h1>
            <!-- <h2>
                Explore <a href="http://caniuse.com">Caniuse</a> through the
                lens of <a href="https://www.google.com/analytics">Google Analytics</a>
            </h2> -->
            <h2>This is a work in progress, excuse the mess.</h2>
            <a
                href="/oauth/github"
                @click="oauth('github')"
                :class="{
                    'btn': true,
                    'hover': githubIsLoading,
                    'btn-outlined-gray': !githubIsLoading,
                    'btn-outlined-green': githubIsLoading,
                }">
                <i class="fa" :class="{
                    'fa-github': !githubIsLoading,
                    'fa-refresh': githubIsLoading,
                    'fa-spin': githubIsLoading,
                }"></i>
                <span>{{ githubBtnText }}</span>
            </a>
        </div>
    </div>
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
