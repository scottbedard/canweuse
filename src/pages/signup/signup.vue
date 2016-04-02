<style lang="sass" scoped>@import 'core';
    main {
        text-align: center;
    }

    form {
        margin: 0 auto;
        padding: 0 12px;
        @include bp-prop(width, 100%, 75%, 50%);
        @include transition(width);

        .error-message {
            color: $error-color;
            height: 0;
            line-height: 24px;
            margin-top: -18px;
            margin-bottom: 24px;
            text-align: left;
            @include transition(height);
            &.form-error { text-align: center }
            &:not(:empty) { height: 24px }
        }
    }
</style>

<template>
    <main class="content margin">
        <form @submit.prevent="onFormSubmitted">
            <header>Create an account, it's free.</header>

            <div v-el:form-error class="error-message form-error">{{ formError }}</div>

            <!-- Name -->
            <input
                v-el:name
                v-model="name"
                :class="{ 'is-invalid': nameError.length > 0 }"
                type="text"
                placeholder="Name"
            />
            <div v-el:name-error class="error-message">{{ nameError }}</div>

            <!-- Email -->
            <input
                v-el:email
                v-model="email"
                :class="{ 'is-invalid': emailError.length > 0 }"
                type="email"
                placeholder="Email address"
            />
            <div v-el:email-error class="error-message">{{ emailError }}</div>

            <!-- Password -->
            <input
                v-el:password
                v-model="password"
                :class="{ 'is-invalid': passwordError.length > 0 }"
                type="password"
                placeholder="Password"
            />
            <div v-el:password-error class="error-message">{{ passwordError }}</div>

            <!-- Password confirmation -->
            <input
                v-el:password-confirmation
                v-model="passwordConfirmation"
                :class="{ 'is-invalid': passwordConfirmationError.length > 0 }"
                type="password"
                placeholder="Confirm your password"
            />
            <div v-el:password-confirmation-error class="error-message">{{ passwordConfirmationError }}</div>

            <!-- Submit button -->
            <button type="submit">Sign up</button>
        </form>
    </main>
</template>

<script>
    import UserState from 'state/user';
    import UserResources from 'resources/user';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                formError: '',
                name: 'Scott',
                nameError: '',
                email: 'foo@bar.com',
                emailError: '',
                password: 'aaaa',
                passwordError: '',
                passwordConfirmation: 'aaaa',
                passwordConfirmationError: '',
                submitIsReady: false,
            };
        },

        /**
         * Select the first input when attached
         *
         * @return {void}
         */
        attached() {
            this.$els.name.focus();
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Create a new account
             *
             * @return {void}
             */
            onFormSubmitted() {
                if (!this.validateName()) return this.$els.name.focus();
                if (!this.validateEmail()) return this.$els.email.focus();
                if (!this.validatePassword()) return this.$els.password.focus();
                if (!this.validatePasswordConfirmation()) return this.$els.passwordConfirmation.focus();

                UserResources.create(this.$data)
                    .then(user => UserState.set(user.data))
                    .catch(error => this.formError = error.data);
            },

            /**
             * Check the validation of individual form fields
             *
             * @return {Boolean}
             */
            validateName() {
                if (this.name.length < 1) {
                    this.nameError = 'We need to know what to call you.';
                    return false;
                }

                this.nameError = '';
                return true;
            },

            validateEmail() {
                if (this.email.length < 1) {
                    this.emailError = 'We need to know how to contact you.';
                    return false;
                }

                this.emailError = '';
                return true;
            },

            validatePassword() {
                if (this.password.length < 1) {
                    this.passwordError = 'Your account needs a password.';
                    return false;
                }

                if (this.password.length < 4) {
                    this.passwordError = 'Your password can be 4 to 255 characters long.';
                    return false;
                }

                this.passwordError = '';
                return true;
            },

            validatePasswordConfirmation() {
                if (this.passwordConfirmation.length < 1) {
                    this.passwordConfirmationError = 'We need you to confirm your password.';
                    return false;
                }

                if (this.passwordConfirmation != this.password) {
                    this.passwordConfirmationError = 'Your password confirmation doesn\'t match';
                    return false;
                }

                this.passwordConfirmationError = '';
                return true;
            },
        },
    };
</script>
