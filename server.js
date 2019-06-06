const Server = require('./services/AppService');
const { handleAsyncExceptions } = require('./util');

if (require.main === module) {
    handleAsyncExceptions();
    Server.run()
}