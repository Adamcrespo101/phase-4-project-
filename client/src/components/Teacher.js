import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Student from './Student';
import GradeFilter from './GradeFilter'
import { useState } from 'react';

function Teacher({teachers}){

    const [displayState, setDisplayState]= useState(true)

    const studentsArr = teachers.students 

    const gradesArr = teachers.grades

    console.log(gradesArr)

    

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
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
      
      function onlyUniqueCourses(value, index, self){
        return self.indexOf(value) === index;
      } 
   
      const courseNames = gradesArr?.map((grade) => grade.course_name)

      const filteredCourses = courseNames?.filter(onlyUniqueCourses)

      function changeDisplay(){
        setDisplayState(prev => !prev)
    }
   
    
      

    return(
        <div className="teacher_profile">
            <h1>My Teacher Profile:</h1>
            <img src={teachers.thumbnail} alt="teacher-img" style={{height: "300px", width: "400px", borderRadius: "50px"}}/>
            <h2>Professor {teachers.name}</h2>
            <br></br>
            <h3>University: {teachers.school}</h3>
            <br></br>
            <h3>Professor of: {teachers.subject}</h3>
            <br></br>
            <h2>{displayState ? "Students" : "Grades:"}</h2>
            <label for="sort-by-course">
            Sort student roster by course:
            <select className='cat-select' name="sort-by-course">
                    <option>All</option>
                {filteredCourses?.map((course) => (
                    <option key={course}>{course}</option>
                    ))}
            </select>
            <button onClick={changeDisplay}>{displayState? "Show Grades and Assignments" : "Return"}</button>
            </label>
            {displayState ? <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Degree track</StyledTableCell>
            <StyledTableCell align="right">Student ID</StyledTableCell>
            <StyledTableCell align="right">Date of Birth</StyledTableCell>
            <StyledTableCell align="right">Expected Graduation</StyledTableCell>
            <StyledTableCell align="right" >Edit</StyledTableCell>
            <StyledTableCell align="right" >Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
       {studentsArr?.map((student) => (
           
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {student.name}
              </StyledTableCell>
              <StyledTableCell align="right">{student.degree_type}</StyledTableCell>
              <StyledTableCell align="right">{student.username}</StyledTableCell>
              <StyledTableCell align="right">{student.date_of_birth}</StyledTableCell>
              <StyledTableCell align="right">{student.expected_graduation}</StyledTableCell>
              <StyledTableCell align="right" className='table-btn'>✏️</StyledTableCell>
              <StyledTableCell align="right" className='table-btn'>❌</StyledTableCell>
            </StyledTableRow>
              
            ))}
        </TableBody>
      </Table>
    </TableContainer> 
    
    : 
    
    <GradeFilter studentsArr={studentsArr} StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow}/>
    
    }
      
        </div>
    )
}

export default Teacher;