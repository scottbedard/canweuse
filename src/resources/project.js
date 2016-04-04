import Vue from 'vue';

module.exports = {

    url: '/api/canweuse/projects{/slug}',

    /**
     * Fetch projects
     *
     * @param  {Object}     params
     * @return {Promise}
     */
    get(params) {
        return Vue.resource(this.url).get(params).then(response => {
            if (typeof response.data === 'object' &&
                typeof response.data.browser_data === 'string') {
                response.data.browser_data = JSON.parse(response.data.browser_data);
            }

            return response;
        });
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
