import '../App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import { render } from "react-dom";
import Sidebar from './Sidebar';
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
