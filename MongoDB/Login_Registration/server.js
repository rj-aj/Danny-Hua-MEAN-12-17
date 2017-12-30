const express = require('express');
const path = require('path');
const session = require('express-session');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));

app.use(session({secret: 'secretpassword'}));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.urlencoded({ extended: true}));

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(port, () => console.log(`listening on port ${ port }`));