import Vue from 'vue';

module.exports = {

    /**
     * @type {String}
     */
    url: '/api/canweuse/user',

    /**
     * Fetch the current user
     *
     * @return {Promise}
     */
    get() {
        return Vue.resource(this.url).get();
    },
};
