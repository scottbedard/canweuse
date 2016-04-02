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
                    <span class="icon">
                        <i class="fa" :class="{
                            'fa-refresh': githubIsLoading,
                            'fa-spin': githubIsLoading,
                            'fa-github': !githubIsLoading,
                        }"></i>
                    </span>
                    <span>{{ githubBtnText }}</span>
                </a>
            </div>
        </section>
    </main>
</template>

<script>
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
