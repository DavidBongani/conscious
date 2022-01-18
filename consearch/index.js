//import packages needed
const express = require ('express');
const path = require ('path');
const fileupload = require('express-fileupload');
//store consearch folder path inside variable
let initial_path = path.join(__dirname, "consearch");
// create expressJS server and set static folder path. Enable file uploads
const app = express();
app.use(express.static(initial_path));
app.use(fileupload());
// response home route. Runs server on port 3000
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})
app.listen("3000", () => {
    console.log('listening......');
})