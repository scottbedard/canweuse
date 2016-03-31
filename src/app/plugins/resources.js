module.exports = {

    /**
     * Install plugin
     *
     * @param  {Object}     Vue
     * @param  {Object}     options
     * @return {void}
     */
    install(Vue, options) {
        Vue.prototype.$resources = this.resources;
    },

    /**
     * Bind resources to Vue models
     *
     * @param  {Object} resources
     * @return {void}
     */
    resources(resources) {
        let promises = [];
        Object.keys(resources).forEach(key => {
            let promise = resources[key];
            promise.then(response => this.$set(key, response.data));
            promises.push(promise);
        });

        return Promise.all(promises);
    },
};
