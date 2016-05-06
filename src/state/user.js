import Vue from 'vue';
import UserResource from 'resources/user';
import ProjectsState from 'state/projects';

module.exports = {

    /**
     * @type {Object}
     */
    state: {
        isInitialized: false,
        isAuthenticated: false,
        user: {
            createdAt: null,
            email: null,
            name: null,
            updatedAt: null,
            username: null,
        },
    },

    /**
     * Initialize the user's state, called from the root component
     *
     * @return {void}
     */
    init() {
        return Vue.resource('/api/canweuse/auth').get().then(response => {
            if (response.data) {
                this.set(response.data);
                ProjectsState.set(response.data.projects);
            }
        });
    },

    /**
     * Determine if the user is logged in
     *
     * @return {Boolean}
     */
    isAuthenticated() {
        return this.state.isAuthenticated;
    },

    /**
     * Log the user out and send them to the home page
     *
     * @return {void}
     */
    logout() {
        this.state.isAuthenticated = false;
        Object.keys(this.state.user).forEach(key => this.state.user[key] = null);
    },

    /**
     * Set the user data
     *
     * @param {Object} data
     */
    set({ created_at, email, id, updated_at, name }) {
        this.state.isAuthenticated = true;
        this.state.user.createdAt = created_at;
        this.state.user.email = email;
        this.state.user.name = name;
        this.state.user.id = parseInt(id);
        this.state.user.updatedAt = updated_at;
    },
};
