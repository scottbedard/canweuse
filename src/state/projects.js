module.exports = {

    /**
     * @type {Object}
     */
    state: [],

    noProjects() {
        return this.state.length === 0;
    },

    set(data) {
        this.state = data;
        console.log (this.state);
    },
};
