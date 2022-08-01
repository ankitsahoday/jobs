//emal-squareboat@gmail.com
//pasd=squareboat


import React, { useState } from 'react'
import { Route,Redirect, Navigate, Link,useNavigate  } from 'react-router-dom';


import './Login.css'
import RecruiterView from './RecruiterView';
const axios = require('axios');

function Login() {
    const [Id,setId]=useState("");
    const [Pwd,setPwd]=useState("");
    console.log(Id+"."+Pwd);


    let navigate = useNavigate();


    let handleSubmit = async(e) =>
    {
     
     e.preventDefault();
     console.log(Id+"."+Pwd);

       axios.post('https://jobs-api.squareboat.info/api/v1/auth/login',
       {
         email:Id,
         password:Pwd
       }).then(function(response)
       {
           console.log(response);
           var token=response.data.data.token;
           
          //  console.log(token);
           alert("Login Successful");

           navigate("/recruiter",{state:{data:token}},{replace:true});
           
          //  var loggedIn=true;

          
           
          
        
           
 
          //  console.log(data.data.token)
    
          
       }).catch(function(error){
         console.log(error);
         alert("wrong credentials");
         navigate("/",{replace:true})
       });

      }


    
   
    return (
    
    <>
    <br>
    </br>
     <div className='loginscreen'>

     <h3>Login</h3>
     <form onSubmit={handleSubmit}>
     <input name='Id' placeholder='Enter email' className='inp' autoComplete='off' required
     value={Id} onChange={(e)=>setId(e.target.value)}></input>
      <br>
      </br>
     <input name='Pwd'type="password" placeholder='Enter password' className='inp' autoComplete='off' value={Pwd}
     onChange={(e)=>setPwd(e.target.value)}></input>
      <br>
      </br>
     <button type="button submit" class="btn btn-primary balign">Login</button>
     </form>
    <p>squareboat@gmail.com squareboat</p>
     </div>
     
     
    </>
  )
}

export default Login;