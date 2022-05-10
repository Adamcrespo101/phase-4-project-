import '../App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Sidebar from './Sidebar';
import Home from './Home';
import Login from './Login';
import Calendar from './Calendar'
import Teacher from './Teacher'
import Student from './Student';
import SignUp from './SignUp';
import TeacherGradesContainer from './TeacherGradesContainer';
import StudentGradesContainer from './StudentGradesContainer';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

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
          setIsAuthenticated(true);
          setCurrentUser(user);
          
        });
      }
    });
  }, []);

 


  console.log(currentUser)
  console.log(isAuthenticated)
  console.log(radioChange)
  // useEffect(() => {
  //   fetch('/teachers/1')
  //   .then(res => res.json())
  //   .then(data => setTeachers(data))
  // },[])



console.log(isAuthenticated)

  function handleRadio (e){
    setRadioChange(e.target.value)
}

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar isAuthenticated={isAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <Routes>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} handleRadio={handleRadio} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}></Route>
        <Route path="/" element={<Home currentUser={currentUser} />}></Route>
        <Route path="/signup" element={<SignUp radioChange={radioChange} setRadioChange={setRadioChange}/>}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/profile" element={<Teacher currentUser={currentUser} />}></Route>
        <Route path="/teacher-grades" element={<TeacherGradesContainer/>}></Route>
        <Route path="/student-grades" element={<StudentGradesContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
