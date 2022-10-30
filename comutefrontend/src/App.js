
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//page imports
import Login from "./pages/Login";
import Register from './pages/Register';
import Home from './pages/Home';
import CreateCarpool from './pages/CreateCarpool';
import AllCarpools from './pages/AllCarpools';
import Profile from './pages/Profile';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path = "/" element = {<Login />}/>
          <Route path = "/register" element = {<Register />}/>
          <Route path = "/home" element = {<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path = "/createcarpool" element = {<ProtectedRoute><CreateCarpool /></ProtectedRoute>}/>
          <Route path = "/allcarpools" element = {<ProtectedRoute><AllCarpools /></ProtectedRoute>}/>
          <Route path = "/myprofile/:user_id" element = {<ProtectedRoute><Profile /></ProtectedRoute>}/>

      
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
