import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GradeFilter from './GradeFilter'
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';



function Teacher({currentUser}){

    const [displayState, setDisplayState]= useState(true) //displayState is state to toggle showing students or final grades for their courses

    const [studentDisplay, setStudentDisplay] = useState(null) //studentDisplay is to grab the student object thats clicked on

    const [showForm, setShowForm]= useState(false) //show/hide new student form

    const [students, setStudents]= useState({})

    const [grades, setGrades]= useState([])

    const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetch('/grades')
    .then(res => res.json())
    .then(data => setGrades(data))
  }, [currentUser])  

    const handleClose = () => setOpen(false);

    const studentsArr = currentUser?.students //students for the logged in teacher

    const gradesArr = currentUser?.grades //final grades for the logged in teachers students 

    const StyledTableCell = styled(TableCell)(({ theme }) => ({ //MUI styling for the students info table
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.success.dark,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      //onlyUniqueCourses returns one of each course that the teacher has
      function onlyUniqueCourses(value, index, self){
        return self.indexOf(value) === index;
      } 

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
      console.log(currentUser)
      const courseNames = gradesArr?.map((grade) => grade.course_name)

      const filteredCourses = courseNames?.filter(onlyUniqueCourses)

        //displayState and setDisplayState change the table from students bio to course final grades
      function changeDisplay(){
        setDisplayState(prev => !prev)
    }
   
    function handleShow(){ //show/hide new student form
      setShowForm(prev => !prev)
    }
    
    const selectedStudent = studentsArr?.find((student) => student.id === studentDisplay) //filters the students from the one thats clicked on

    function handleOpen(){
      fetch(`/find/${selectedStudent?.id}`)
      .then(res => res.json())
      .then(data => setStudents(data))
    setOpen(true)
  }

  const [formData, setFormData] = useState({
    course_name: '',
    feedback: '',
    result: '',
    student_id: selectedStudent?.id,
    teacher_id: currentUser?.id
})

function handleNewStudent(e){
  setFormData({...formData, [e.target.name]: e.target.value})
}

function handleSubmit(e){
  const newGrade = {
    course_name: formData.course_name,
    result: formData.result,
    feedback: formData.feedback,
    teacher_id: currentUser?.id,
    student_id: selectedStudent?.id
  }
  console.log(newGrade)
  e.preventDefault()
  fetch('/grades', {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newGrade)
  })
  .then(res => res.json())
  .then(data => setGrades([...grades, data]))
}

    return(
        <div className="teacher_profile">
            <h1>My Teacher Profile:</h1>
            <img src={currentUser?.thumbnail} alt="teacher-img" style={{height: "300px", width: "400px", borderRadius: "50px"}}/>
            <h2>Professor {currentUser?.name}</h2>
            <br></br>
            <h3>University: {currentUser?.school}</h3>
            <br></br>
            <h3>Professor of: {currentUser?.subject}</h3>
            <br></br>
            <div className={showForm ? 'info-container' : 'hidden'}>
              <h2>Upload new grade for {selectedStudent === undefined ? "student" : selectedStudent?.name}:</h2>
              <form onSubmit={handleSubmit}>
                  <div className='new-student'>
                    <select className='cat-select' name="course_name" id="new-select" onChange={handleNewStudent} value={formData.course_name}>
                    <option>All</option>
                {filteredCourses?.map((course) => (
                  <option key={course}>{course}</option>
                  ))}
            </select>
                    <label for="result"> Final Grade:
                      <input type="text" name="result" placeholder='final grade...'  onChange={handleNewStudent} value={formData.result}/>
                    </label>
                    <br></br>
                    <label for="feedback"> Feedback:
                      <input type="text" name="feedback" placeholder='course feedback...'  onChange={handleNewStudent} value={formData.feedback}/>
                    </label>
                    <br></br>
                    
                  <button type='submit' className="x-button"> Upload grade [+]</button>
                  </div>
              </form>
            </div>
            
              <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
                  <Typography id="transition-modal-title" variant="h6" component="h2">
                    Transcript for: {selectedStudent?.name}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    _________________________________________
                  </Typography>
                  {students?.grades?.map((grade) => {
    return       (<>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Course: {grade?.course_name}
                 </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                     Final Grade: {grade?.result}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Feedback: {grade?.feedback}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    _________________________________________
                  </Typography>
                  </>)
                  })}
                </Box>
            </Fade>
          </Modal>
        </div>
            <h2>{displayState ? "Students:" : "Grades:"}</h2> 
            <p className="show-button" onClick={changeDisplay}>{displayState? "Show Final Grades" : "Return to roster"}</p>
            <p className='show-button' onClick={handleShow}>{!showForm ? "Upload new grades" : "Close form"}</p>
            {displayState ? <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Degree track</StyledTableCell>
            <StyledTableCell align="right">Student ID</StyledTableCell>
            <StyledTableCell align="right">Date of Birth</StyledTableCell>
            <StyledTableCell align="right">Expected Graduation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
       {studentsArr?.map((student) => (
           
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" onClick={(() => setStudentDisplay(student.id))}>
              <div onClick={handleOpen}>{student.name}</div>
              </StyledTableCell>
              <StyledTableCell align="right">{student.degree_type}</StyledTableCell>
              <StyledTableCell align="right">{student.username}</StyledTableCell>
              <StyledTableCell align="right">{student.date_of_birth}</StyledTableCell>
              <StyledTableCell align="right">{student.expected_graduation}</StyledTableCell>
            </StyledTableRow>
              
            ))}
        </TableBody>
      </Table>
    </TableContainer> 
    
    : 
    
    <GradeFilter studentsArr={studentsArr} currentUser={currentUser} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} filteredCourses={filteredCourses} setStudentDisplay={setStudentDisplay}/>
    
    }
      
        </div>
    )
}

export default Teacher;