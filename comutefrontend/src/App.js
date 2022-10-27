
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//page imports
import Login from "./pages/Login";
import Register from './pages/Register';
import Home from './pages/Home';
import CreateCarpool from './pages/CreateCarpool';
import AllCarpools from './pages/AllCarpools';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login />}/>
          <Route path = "/register" element = {<Register />}/>
          <Route path = "/home" element = {<Home />}/>
          <Route path = "/createcarpool" element = {<CreateCarpool />}/>
          <Route path = "/allcarpools" element = {<AllCarpools />}/>
          <Route path = "/myprofile/:user_id" element = {<Profile />}/>

      
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
