/*.................. Created By Ahmed Allam .................*/

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
const apiKey = 'b4dd9e49108e5e7e87d80394265d2981';

 document.getElementById('generate').addEventListener('click', zipData);
 
function zipData () {

  const userResponse = document.getElementById('feelings').value;
  const newZip =  document.getElementById('zip').value;
  let baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${newZip}&appid=${apiKey}&units=metric`;
  
  if (!newZip) {alert("Please, Enter another Zip Code");}
  
  else {
    // an API call
  getZipInfo(baseUrl).then(function(data){

postData('/addRegionData', {temp:data.main.temp, date:newDate, feelings:userResponse})
.then(updateUI() )
} )

  }
}

//........................... Get Temperature....

      const getZipInfo = async (baseUrl)=>{

       const res = await fetch(baseUrl)

  try {
    const data = await res.json();
     return data;       
   }  
   catch(error) { console.log("error", error); }
  }

//POST Route :.................................//*    
 
const postData = async ( url = '', data = {})=>{                                     
    const response = await fetch(url, {           //  POST request, which is an object passed as the second parameter to fetch().
                                                  // The First parameter is the URL we want to make the POST request to.

    method: 'POST',                                             // Route type (post)
    credentials: 'same-origin',                        
    headers: {
        'Content-Type': 'application/json',                      // the application going to run on json data 
    },
                                                         //  (change string to json) 
    body: JSON.stringify(data),  
  });

    try {
      const newData = await response.json();
      return newData;
    }
    catch(error) {
    console.log("error", error);                          // appropriately handling the error 
    }
}

//................................update UI
  
const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    console.log(allData);
    
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.feelings;

  }catch(error){
    console.log("your request failed , please try again.", error);
  }
}

 
