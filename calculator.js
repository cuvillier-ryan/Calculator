const express = require('express');

//We need body-parser to handle post request on index.html
const bodyParser = require("body-parser");

const app = express();

//Below is the code that will be used whenever we use bodyParser.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is "  + result);
})




app.listen(3000, function() {
  console.log('App listening on port 3000');
})
