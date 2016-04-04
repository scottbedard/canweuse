let browserColors = {
    'Edge': '#2196F3', // blue
    'Chrome': '#F44336', // red
    'Safari': '#4CAF50', // green
    'Firefox': '#FFC107', // amber
    'Internet Explorer': '#3F51B5', // indigo
};

let additionalColors = [
    '#673AB7', // deep purple
    '#009688', // teal
    '#CDDC39', // lime
    '#E91E63', // pink
    '#9C27B0', // purple
    '#00BCD4', // cyan
    '#FFEB3B', // yellow
];

module.exports = function (browser) {
    if (typeof browserColors[browser] !== 'undefined') {
        return browserColors[browser];
    }

    return additionalColors.length ? additionalColors.shift() : null;
};
