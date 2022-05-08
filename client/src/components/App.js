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

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [radioChange, setRadioChange]= useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [teachers, setTeachers]= useState({})
  // useEffect(() => {
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //         setIsAuthenticated(true);
  //       });
  //     }
  //   });
  // }, []);

  // if (!isAuthenticated) {
  //   return <div></div>;
  // }

  useEffect(() => {
    fetch('/teachers/1')
    .then(res => res.json())
    .then(data => setTeachers(data))
  },[])



console.log(teachers)

  function handleRadio (e){
    setRadioChange(e.target.value)
}

  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} handleRadio={handleRadio} username={username} setUsername={setUsername} setPassword={setPassword} password={password} radioChange={radioChange} setRadioChange={radioChange}/>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp radioChange={radioChange} setRadioChange={setRadioChange}/>}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/profile" element={<Teacher teachers={teachers} />}></Route>
        <Route path="/teacher-grades" element={<TeacherGradesContainer/>}></Route>
        <Route path="/student-grades" element={<StudentGradesContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
