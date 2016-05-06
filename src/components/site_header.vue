<style lang="sass" scoped>@import 'core';
    div.caret {
        animation: blinking 1.4s infinite;
        border-right: 2px solid transparent;
        min-height: 36px;
        padding-right: 4px;
        @keyframes blinking {
            from, to { border-color: transparent }
            20% { border-color: transparent }
            30% { border-color: #ccc }
            70% { border-color: #ccc }
            80% { border-color: transparent }
        }
    }

    a, span {
        display: inline-block;
        font-size: 32px;
        font-weight: 100;
        line-height: 36px;
    }
</style>

<template>
    <div class="caret">
        <a v-link="{ name: 'home' }" class="title">{{ titleCharacters }}</a>
        <span class="slash" v-show="delimeterIsVisible">/</span>
        <a href="#">{{ projectCharacters }}</a>
    </div>
</template>

<script>
    import AppState from "state/app";

    module.exports = {

        /**
         * Data
         *
         * @return {Object}
         */
        data() {
            return {
                app: AppState.state,
                delimeterIsVisible: false,
                isTyping: false,
                isWatchingSubtitle: false,
                speed: 100,
                speedVariation: 10,
                startDelay: 2000,
                title: 'can we use',
                titleCharacters: '',
                preTicks: 2,
                projectCharacters: '',
            };
        },

        /**
         * Ready
         *
         * @return {void}
         */
        ready() {
            setTimeout(this.typeTitle, this.startDelay);
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Clear the project title
             *
             * @return {void}
             */
            clearProject() {
                return new Promise(resolve => {
                    this.isTyping = true;
                    const backspace = () => {
                        this.projectCharacters = this.projectCharacters.slice(0, -1);
                        if (this.projectCharacters.length > 0) {
                            setTimeout(backspace, this.getTypeTimeout());
                        } else {
                            this.typeDelimeter(false)
                                .then(() => { this.isTyping = false; resolve() });
                        }
                    };

                    backspace();
                });
            },

            /**
             * Calculates a type timeout with a bit of variation
             *
             * @return {Number}
             */
            getTypeTimeout() {
                const min = this.speed - this.speedVariation;
                const max = this.speed + this.speedVariation;
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },

            /**
             * Subtitle changed event handler
             *
             * @return {void}
             */
            onSubtitleChanged() {
                setTimeout(this.typeProject, this.getTypeTimeout());
            },

            /**
             * Type or erase the delimeter with surrounding type timeouts
             *
             * @param  {Boolean} isVisible
             * @return {Promise}
             */
            typeDelimeter(isVisible = null) {
                if (isVisible === null) {
                    isVisible = Boolean(this.app.subtitle);
                }

                return new Promise(resolve => {
                    this.isTyping = true;
                    setTimeout(() => {
                        this.delimeterIsVisible = isVisible;
                        setTimeout(() => {
                            this.isTyping = false;
                            resolve();
                        }, this.getTypeTimeout());
                    }, this.getTypeTimeout());
                });
            },

            /**
             * Type characters one by one
             *
             * @param  {String}     source  Data property to type to
             * @param  {String}     string  The string to type
             * @return {Promise}
             */
            typeCharacters(source, string) {
                return new Promise(resolve => {
                    if (string === null) {
                        resolve();
                    }

                    this.isTyping = true;
                    let characters = string.split('');
                    const typeNextCharacter = () => {
                        this[source] += characters.shift();
                        if (characters.length) {
                            setTimeout(typeNextCharacter, this.getTypeTimeout());
                        } else {
                            this.isTyping = false;
                            resolve();
                        }
                    };

                    typeNextCharacter();
                });
            },

            /**
             * Type the canweuse title
             *
             * @return {void}
             */
            typeTitle() {
                this.typeCharacters('titleCharacters', this.title)
                    .then(this.typeProject);
            },

            /**
             * Type the project title
             *
             * @return {void}
             */
            typeProject() {
                this.clearProject()
                    .then(this.typeDelimeter)
                    .then(this.typeCharacters.bind(this, 'projectCharacters', this.app.subtitle))
                    .then(this.watchSubtitle);
            },

            /**
             * Watch the subtitle for changes
             *
             * @return {void}
             */
            watchSubtitle() {
                if (!this.isWatchingSubtitle) {
                    this.$watch('app.subtitle', this.onSubtitleChanged);
                    this.isWatchingSubtitle = true;
                }
            }
        },
    };
</script>
