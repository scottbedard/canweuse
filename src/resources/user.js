import Vue from 'vue';

module.exports = {

    /**
     * @type {String}
     */
    url: '/api/canweuse/users',

    /**
     * Fetch the current user
     *
     * @return {Promise}
     */
    get() {
        return Vue.resource(this.url).get();
    },

    /**
     * Create a user
     *
     * @param  {String} options.name
     * @param  {String} options.email
     * @param  {String} options.password
     * @param  {String} options.passwordConfirmation
     * @return {Promise}
     */
    create({ name, email, password, passwordConfirmation }) {
        return Vue.http.post(this.url, { name, email, password, passwordConfirmation });
    },
};
