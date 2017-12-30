const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();

require('./server/config/mongoose.js')

app.use(bodyParser.json());

const routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(port, () => console.log(`listening on port ${ port }`));