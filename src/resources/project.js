import Vue from 'vue';

module.exports = {

    create(data) {
        let { privateKey } = data;
        return Vue.http.post('/api/canweuse/projects', data, { upload: privateKey }, response => {
            console.log (response);
        });
    },
};
