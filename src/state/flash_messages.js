/**
 * @type {Number}   Unique identifier for messages
 */
let messageId = 0;

/**
 * @type {Number}   Default duration in milliseconds
 */
let defaultDuration = 4000;

module.exports = {

    /**
     * @type {Array}
     */
    state: [],

    /**
     * Push a message onto the state
     *
     * @param  {String} content
     * @param  {String} class
     * @param  {Number} duration
     * @return {void}
     */
    add(content, msgClass = 'info', duration = defaultDuration) {
        messageId++;

        this.state.push({
            id: messageId,
            class: msgClass,
            content,
        });

        setTimeout(this.remove.bind(this, messageId), duration);
    },

    /**
     * Remove a flash message
     *
     * @param  {Number} id
     * @return {void}
     */
    remove(id) {
        this.state.forEach((message, index) => {
            if (message.id === id) {
                this.state.splice(index, 1);
                return;
            }
        });
    },

    /**
     * Class helpers
     *
     * @param  {string} content
     * @return {string}
     */
    error(content, duration = defaultDuration) {
        this.add(content, 'error', duration);
    },

    warning(content, duration = defaultDuration) {
        this.add(content, 'warning', duration);
    },

    info(content, duration = defaultDuration) {
        this.add(content, 'info', duration);
    },

    success(content, duration = defaultDuration) {
        this.add(content, 'success', duration);
    },
};
