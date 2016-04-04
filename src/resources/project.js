import Vue from 'vue';

module.exports = {

    url: '/api/canweuse/projects',

    /**
     * Fetch projects
     *
     * @param  {Object}     params
     * @return {Promise}
     */
    get(params = {}) {
        return Vue.resource(this.url).get(params);
    },

    /**
     * Create a project
     *
     * @param  {Object}     data
     * @return {Promise}
     */
    create(data) {
        return Vue.http.post(this.url, data);
    },
};
