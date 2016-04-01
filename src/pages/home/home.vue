<style lang="sass" scoped>@import 'core';

    //
    // Welcome section
    //
    .welcome {
        overflow: hidden;
        text-align: center;
        @include bp-prop(padding, 24px 0, 60px 0, 120px 0);
        @include transition(padding);

        h1 {
            @include bp-prop(font-size, 48px, 52px);
            @include transition(font-size);
        }

        p {
            font-size: 24px;
            font-weight: 300;
            @include bp-prop(margin, 36px, 48px, 60px);
            @include transition(margin);
            a { font-weight: 400 }
        }

        .auth-buttons {
            @include bp-prop(margin, -6px, -12px)
            @include transition(margin);
            a.btn {  @include bp-prop(margin, 6px, 12px) }
        }
    }

</style>

<template>
    <main class="margin padding">
        <section class="welcome">
            <h1>Cross browser development just got easier.</h1>
            <p>Explore <a href="http://caniuse.com">Caniuse</a> through the lens of <a href="https://www.google.com/analytics/">Google Analytics</a></p>
            <div class="auth-buttons">
                <a class="btn success">Sign in with GitHub</a>
                <a v-link="{ name: 'signup' }" class="btn">Create an account</a>
            </div>
        </section>
    </main>
</template>

