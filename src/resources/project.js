import Vue from 'vue';

module.exports = {

    /**
     * Create a project
     *
     * @param  {Object} data
     * @return {Promise}
     */
    create(data) {
        return Vue.http.post('/api/canweuse/projects', data);
    },
};
