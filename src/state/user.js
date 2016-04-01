import Vue from 'vue';

module.exports = {

    /**
     * @type {Object}
     */
    state: {
        isInitialized: false,
        isAuthenticated: false,
    },


    /**
     * Initialize the user's state, called from the root component
     *
     * @return {void}
     */
    init() {
        if (this.state.isInitialized === true) {
            return;
        }

        Vue.resource('/api/canweuse/auth').get().then(response => {
            if (response.data) {
                this.setUser(response.data);
            }

            this.state.isInitialized = true;
        });
    },

    /**
     * Set the user data
     *
     * @param {Object} data
     */
    setUser(data) {
        console.log ('setting user data', data);
    },
};
