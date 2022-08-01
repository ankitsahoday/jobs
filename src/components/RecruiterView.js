import React from 'react'
import { useLocation } from 'react-router-dom';
import './RecruiterView.css'

var ta=[];
function RecruiterView() {
  const location=useLocation();
     var auth=location.state.data;
     var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://jobs-api.squareboat.info/api/v1/recruiters/jobs',
  headers: { 
    'Authorization':auth
  }
};

axios(config)
.then(function (response) {
  var data=response.data.data.data;
  for (let index = 0; index < data.length; index++) {
  let  element = data[index].title;
    console.log(element)
    ta.push(element);
    
  }

  
})
.catch(function (error) {
  console.log(error);
});

console.log(ta);
return (

      <div className="cardrec">
      <div>
        <p>{ta[0]}</p>
      </div>

      </div>


    

  )
}

export default RecruiterView