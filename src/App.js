import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Information from './components/Information';
import Navbar from './components/Navbar';
import Login from './components/Login';
import RecruiterView from './components/RecruiterView';
function App() {
  return (
 <div className="App">

   <Navbar></Navbar>   
 
  
<Routes>
<Route exact path="/" element={<Information/>}></Route>
<Route exact path="/login" element={<Login/>}></Route>
<Route exact path="/recruiter" element={<RecruiterView/>}></Route>
</Routes>
 
</div>


  
  );
}

export default App;
