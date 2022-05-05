import '../App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Sidebar from './Sidebar';
import Home from './Home';
import Login from './Login';
import Calendar from './Calendar'
import Teacher from './Teacher'
import Student from './Student';
import TeacherGradesContainer from './TeacherGradesContainer';
import StudentGradesContainer from './StudentGradesContainer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/teacher-profile" element={<Teacher/>}></Route>
        <Route path="/student-profile" element={<Student/>}></Route>
        <Route path="/teacher-grades" element={<TeacherGradesContainer/>}></Route>
        <Route path="/student-grades" element={<StudentGradesContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
