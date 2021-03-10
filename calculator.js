
const express = require('express');

//We need body-parser to handle post request on index.html
const bodyParser = require("body-parser");

const app = express();

//Below is the code that will be used whenever we use bodyParser.
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  res.send("Thanks for posting that!")
})




app.listen(3000, function(){
  console.log('App listening on port 3000');
})
