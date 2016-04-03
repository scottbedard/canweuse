import Vue from 'vue';

module.exports = {

    create(data) {
        return Vue.http.post('/api/canweuse/projects', data);
    },
};
