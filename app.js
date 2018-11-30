const util = require('util'),
path = require('path'),
express = require('express'),
app = express(),
bodyParser = require('body-parser'),
router = require('./routes/index');
port = 3000;




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.use('/',router);

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });