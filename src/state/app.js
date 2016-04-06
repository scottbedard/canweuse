module.exports = {

    /**
     * @type {Object}   Application state
     */
    state: {
        layout: 'default',
    },

    /**
     * Set the layout component
     *
     * @param {String} layout
     * @return {void}
     */
    setLayout (layout) {
        this.state.layout = layout;
    },
};
