import Vue from 'vue';
import UserState from 'state/user';

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

    /**
     * Log the user out
     *
     * @return {Promise}
     */
    logout() {
        return Vue.http.get('api/canweuse/auth/logout');
    },
};
