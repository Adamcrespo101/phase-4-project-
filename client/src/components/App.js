import '../App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Sidebar from './Sidebar';
import Home from './Home';
import Login from './Login';
import CalendarComponent from './CalendarComponent';
import Teacher from './Teacher'
import Student from './Student'
import SignUp from './SignUp';
import { useState, useEffect } from 'react';

function App() {

  
  const [radioChange, setRadioChange]= useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  

    useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(false);
          setCurrentUser(user);
          console.log("teacher authenticated")
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch('/auth')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(false);
          setCurrentUser(user);
          console.log("student authenticated")
        });
      }
    });
  }, []);
  

 


  console.log(currentUser)
  //console.log(isAuthenticated)
  console.log(radioChange)


console.log(isAuthenticated)

  function handleRadio (e){
    setRadioChange(e.target.value)
}

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar isAuthenticated={isAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser} setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/" index element={<Login setCurrentUser={setCurrentUser} handleRadio={handleRadio} radioChange={radioChange} setIsAuthenticated={setIsAuthenticated}/>}></Route>
        <Route path="/home" element={<Home currentUser={currentUser} />}></Route>
        <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} setIsAuthenticated={setIsAuthenticated}/>}></Route>
        <Route path="/calendar" element={<CalendarComponent />}></Route>
       { radioChange === "Teacher" ?
        <Route path="/profile" element={<Teacher currentUser={currentUser} />}></Route>
        :
        <Route path="/profile" element={<Student currentUser={currentUser} />}></Route>}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
