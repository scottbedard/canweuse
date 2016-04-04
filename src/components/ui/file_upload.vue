<style lang="sass" scoped>@import 'core';
    .v-file-upload, {
        color: #ccc;
        cursor: pointer;
        position: relative;

        &:hover {
            border-color: #666;
        }

        &:hover, &.has-file {
            color: #999;
        }

        input {
            display: none;
        }

        i.fa {
            padding-right: 12px;
        }

        i.clear {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            padding: 12px;

            &:hover {
                color: #FA503A;
            }
        }
    }
</style>

<template>
    <div class="v-file-upload" @click="onClicked" :class="{ 'has-file': hasFile }">
        <div>
            <i class="fa {{ icon }}"></i><span>{{ message || placeholder }}</span>
            <i class="fa fa-times clear" @click.stop="onClearClicked" v-if="hasFile"></i>
        </div>
        <input
            v-el:input
            type="file"
            :name="name"
            :accept="accept"
            :disabled="disabled"
            :multiple="multiple"
            :required="required"
            @change="onFileChanged"
        >
    </div>
</template>

<script>
    module.exports = {

        /**
         * @type {Array}
         */
        props: {
            uploadIcon: { default: 'fa-upload' },
            fileIcon: { default: 'fa-check' },
            hasFile: { default: false },
            name: { default: null },
            accept: { default: null },
            disabled: { default: null },
            multiple: { default: null },
            required: { default: null },
            message: { default: '' },
            placeholder: { default: 'Select a file' },
        },

        computed: {
            icon() {
                return this.hasFile ? this.fileIcon : this.uploadIcon;
            },
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Clear the file input
             *
             * @return {void}
             */
            onClearClicked() {
                this.$els.input.value = "";
                this.$els.input.dispatchEvent(new Event('change'));
            },

            /**
             * Dispatch the file up the chain when it changes
             *
             * @return {void}
             */
            onFileChanged() {
                let reader = new FileReader(),
                    file = this.$els.input.files[0];

                // If no file is found, dispatch an empty one
                if (!file) {
                    this.hasFile = false;
                    this.message = this.placeholder;
                    this.$dispatch('file-changed', { file: null, text: '' });
                    return;
                }

                // Otherwise read the file, and dispatch it
                reader.onload = () => {
                    this.hasFile = true;
                    this.message = file.name;
                    this.$dispatch('file-changed', { file, text: reader.result });
                };

                reader.readAsText(file);
            },

            /**
             * Relay clicks to the input field
             *
             * @return {void}
             */
            onClicked() {
                this.$els.input.click();
            }
        }
    };
</script>
