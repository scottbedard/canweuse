<style lang="sass" scoped>@import 'core';
    .v-flash-messages {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
        left: 50%;
        max-width: $site-max-width;
        transform: translateX(-50%);
        @include bp-prop(max-width, $site-max-width, 580px);
        @include transition('max-width');
    }

    ul {
        margin: 0;
        padding: 12px;
    }

    li {
        color: #fff;
        cursor: pointer;
        list-style: none;
        padding: 12px;
        border-radius: 3px;
        position: relative;

        > div {
            padding-right: 24px;
        }

        i.fa {
            font-size: 20px;
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
        }

        &.error { background-color: $error-color }
        &.info { background-color: $info-color }
        &.success { background-color: $success-color }
        &.warning { background-color: $warning-color }

        &:not(:first-child) { margin-top: 12px }
    }
</style>

<template>
    <div class="v-flash-messages">
        <ul class="margin padding">
            <li
                v-for="(index, message) of messages"
                @click="dismiss(index)"
                :class="message.class"
                transition="fade"
                transition-mode="out-in"
            >
                <div>{{{ message.content }}}</div>
                <i class="fa fa-times"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    import FlashMessagesState from 'state/flash_messages';

    module.exports = {

        /**
         * @return {Object}
         */
        data() {
            return {
                messages: FlashMessagesState.state,
            };
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Dismiss a message
             *
             * @param  {Number} index
             * @return {void}
             */
            dismiss(index) {
                this.messages.splice(index, 1);
            },
        },
    };
</script>
