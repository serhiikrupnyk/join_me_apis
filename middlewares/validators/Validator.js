const handler = require('./handlers/handler');
const setHandler = function (actions) {
    let handledActions = {};
    for (let action in actions) {
        handledActions[action] = new Proxy(actions[action], handler);
    }
    return handledActions;
};
module.exports = setHandler;
