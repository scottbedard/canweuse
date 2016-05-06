module.exports = {

    /**
     * @type {Object}   Application state
     */
    state: {
        layout: 'default',
        subtitle: null,
    },

    /**
     * Set the layout component
     *
     * @param   {String} layout
     * @return  {void}
     */
    setLayout (layout) {
        this.state.layout = layout;
    },

    /**
     * Set the subtitle
     *
     * @param   {String} subtitle
     * @return  {void}
     */
    clearSubtitle () {
        this.state.subtitle = null;
    },

    /**
     * Set the subtitle
     *
     * @param   {String} subtitle
     * @return  {void}
     */
    setSubtitle (subtitle) {
        this.state.subtitle = subtitle;
    },
};
