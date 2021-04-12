/* created by Ahmed Allam */

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyparser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyparser.urlencoded({extended:false})) ;      // Configuring express to use body-parser as middl-eware 
app.use(bodyparser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;                  // Spin up the server

const server = app.listen(port, ()=> {                      // Call back to debug
console.log('server is running');
console.log(`running on local host : ${port}`);
});
//.................................................................
    
// POST Route ............................ //3/

 app.post('/addRegionData', addRegionData);
     
     function addRegionData(req, res) {

     projectData.temp = req.body.temp;        // posting data to our end point 
projectData.date = req.body.date;
projectData.feelings = req.body.feelings

// res.send();
     }

//................................ Update UI .....................

app.get('/all', getData) 
     
     function getData(req, res ) {
       res.send(projectData)
       //console.log(projectData)
     }
