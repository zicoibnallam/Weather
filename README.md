# ..................................... Weather-Journal App Project .........................................

## Overview

 This project to create an asynchronous web app that uses Web API and user data to dynamically update the UI, 
 with getting the current date and temperature at the moment of specific Zip Code Area.

## Main Missions :

 - modifying the `server.js` file and the `website/app.js` file. 

 - using `index.html` for element references. 

 - using `style.css` to style the application to customized perfection.

## Steps :

 - Creating API credentials on OpenWeatherMap.com .

 - Node and Express were installed on the local machine.

 - The Express app instance is pointing to the project folder with .html, .css, and .js files in " website " folder.

 - The ‘cors & The body-parser’ package were installed in the project from the command line.

 - a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.

 - There is a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.

 - There is an asynchronous function to fetch the data from the app endpoint

 - adding an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.

 - Adding an event listener to an existing HTML button from DOM using Vanilla JS. and excuting the 3 main functions (Get - Post - UpDate)

 - Setting the properties of existing HTML elements from the DOM using Vanilla JavaScript. through their innerHTML properties dynamically set according to data returned by the app route.

 - finally showing the temperature , the date and the feeling (entry) of the users .


# .................................................. Modified By Ahmed Allam .........................................





