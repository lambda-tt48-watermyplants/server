const server = require('./api/server');
const dotenv = require('dotenv');
dotenv.config()
;

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
});