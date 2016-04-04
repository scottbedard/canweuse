module.exports = {

    /**
     * @type {Object}
     */
    state: [],

    /**
     * Returns true if the user has no projects
     *
     * @return {Boolean}
     */
    noProjects() {
        return this.state.length === 0;
    },

    /**
     * Set the projects collection
     *
     * @param {Array} data
     */
    set(data) {
        this.state = data;
    },
};
