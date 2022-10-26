
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//page imports
import Login from "./pages/Login";
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login />}/>
          <Route path = "/register" element = {<Register />}/>

      
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
