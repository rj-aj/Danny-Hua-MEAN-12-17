const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();

require('./server/config/mongoose.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));

app.use(express.static(path.join(__dirname, '/client/static')));
app.use(bodyParser.urlencoded({ extended: true}));

const routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(port, () => console.log(`listening on port ${ port }`));