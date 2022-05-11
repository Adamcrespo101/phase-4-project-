import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { lightBlue } from '@mui/material/colors';



function GradeFilter({studentsArr, StyledTableCell, StyledTableRow, filteredCourses, currentUser, setStudentDisplay}){
    
    const [grades, setGrades]= useState([])
    const [courseName, setCourseName]= useState("All")
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [currentGrade, setCurrentGrade]= useState(null)
    const [updateGrade, setUpdateGrade]= useState({
      result: '',
      feedback: ''
    })

    useEffect(() => {
        fetch(`/grades/${currentUser?.id}`)
        .then(res => res.json())
        .then(data => setGrades(data))
    },[studentsArr])

    const selectedGrade = grades?.find((grade) => grade.id === currentGrade)
    const names = studentsArr?.map((student) => {
        return <StyledTableCell component="th" scope="row">{student.name}</StyledTableCell> //maps the students names
    })                                                                                      //dont think im even using it

    
     let courseFilter = grades?.filter((grade) => grade?.course_name?.includes(courseName)) //filters based on the selected course 

     function handleOpen(){
      fetch(`/find/${selectedGrade?.id}`)
      .then(res => res.json())
      .then(data => setGrades(grades))
    setOpen(true)
  }
    
  console.log(selectedGrade)

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

  function updateChange(e){
    setUpdateGrade(({...updateGrade, [e.target.name]: e.target.value}))
  }

  function handleUpdate(e){
    e.preventDefault()
    fetch(`/grades/${selectedGrade?.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateGrade)
    })
    .then(res => res.json())
    .then(data => setGrades(grades.map(grade => {return grade.id === data.id ? data : grade}))
    )
    }
    

    function deleteGrade(){
      fetch(`/grades/${selectedGrade?.id}`, {
          method: "DELETE"
        })
        const deletedGrades = grades.filter(grade => grade.id !== selectedGrade?.id)
        setGrades(deletedGrades)
    }
    console.log(selectedGrade)

   

    return(
      <>
      <label for="sort-by-course" id="cat-label">
      Sort student roster by course:
            <select className='cat-select' name="sort-by-course"  onChange={(e) => setCourseName(e.target.value)}>
                    <option>All</option>
                {filteredCourses?.map((course) => (
                    <option key={course}>{course}</option>
                    ))}
            </select>
            </label>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="right">Course</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            <StyledTableCell align="center">Feedback</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
           
             {courseName === "All" ? 
             
                  grades?.map((grade) => (
           <>
            <StyledTableRow>
            <StyledTableCell component="th" scope="row" onClick={() => setStudentDisplay(grade.student.id)}>{grade.student.name}</StyledTableCell>
              <StyledTableCell align="right">{grade.course_name}</StyledTableCell>
              <StyledTableCell align="right">{grade.result}</StyledTableCell>
              <StyledTableCell align="right" className='table-btn' onClick={() => setCurrentGrade(grade.id)}><div onClick={handleOpen}>✏️</div></StyledTableCell>
              <StyledTableCell align="right" className='table-btn' onClick={deleteGrade}><div onClick={(() => setCurrentGrade(grade.id))}>❌</div></StyledTableCell>
              <StyledTableCell align="right">{grade.feedback}</StyledTableCell> 
              </StyledTableRow>
              <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
        <Box sx={style}>
          <form onSubmit={handleUpdate}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Final Grade for: {selectedGrade?.course_name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Final Grade: <input type="text" name="result" placeholder={selectedGrade?.result} onChange={updateChange} value={updateChange.result}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Feedback: <textarea type="text" name="feedback" placeholder={selectedGrade?.feedback} onChange={updateChange} value={updateChange.feedback}/>
          </Typography>
          <button type="submit" className='x-button'>Update</button>
          </form>
        </Box>
        </Fade>
      </Modal>       

            </> ))        
            :
              courseFilter?.map((grade) => (
          <>
            <StyledTableRow>
            <StyledTableCell component="th" scope="row">{grade.student.name}</StyledTableCell>
              <StyledTableCell align="right">{grade.course_name}</StyledTableCell>
              <StyledTableCell align="right">{grade.result}</StyledTableCell>
              <StyledTableCell align="right" className='table-btn' >✏️</StyledTableCell>
              <StyledTableCell align="right" className='table-btn'>❌</StyledTableCell>
              <StyledTableCell align="right">{grade.feedback}</StyledTableCell> 
            </StyledTableRow>
            
        </>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
    </> 
    )
}

export default GradeFilter;