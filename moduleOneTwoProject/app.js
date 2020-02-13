//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
// code to listen for requests
var fileList = './front/list.json';
var list = require(fileList);
var fs = require('file-system');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static(__dirname + '/front', {
  extensions: ['html']
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// adds a new list item to the list JSON
app.post("/list", (req, res) => {
  var item = req.body;
  list.push(item);
  fs.writeFile(fileList, JSON.stringify(list, null, 2));
  res.end();
});

// deletes an item from the list JSON
app.post("/delete", (req, res) => {
  var id = req.body.id;
  list.splice(id, 1);
  fs.writeFile(fileList, JSON.stringify(list, null, 2));
  res.end();
});

// updates the list with new items
app.post("/update", (req, res) => {

  for (var i = 0; i < req.body.data.length; i++) {
    list = req.body.data
    fs.writeFile(fileList, JSON.stringify(list, null, 2));
  }

});

app.listen(8080, () => console.log("listening on port 8080"));
