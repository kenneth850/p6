// création du server nodejs

const http = require('http');
const app = require ('./app');

//mise en service du server nodejs
app.set('port', process.env.PORT || 3000)
const server = http.createServer(app);
;
server.listen(process.env.PORT || 3000);