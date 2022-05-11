import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


function GradeFilter({studentsArr, StyledTableCell, StyledTableRow, filteredCourses, currentUser, setStudentDisplay}){
    
    const [grades, setGrades]= useState([])
    const [courseName, setCourseName]= useState("All")

    useEffect(() => {
        fetch(`/grades/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setGrades(data))
    },[])

    const names = studentsArr?.map((student) => {
        return <StyledTableCell component="th" scope="row">{student.name}</StyledTableCell> //maps the students names
    })                                                                                      //dont think im even using it

    
     let courseFilter = grades?.filter((grade) => grade.course_name.includes(courseName)) //filters based on the selected course 
    
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
              <StyledTableCell align="right" className='table-btn'>✏️</StyledTableCell>
              <StyledTableCell align="right" className='table-btn'>❌</StyledTableCell>
              <StyledTableCell align="right">{grade.feedback}</StyledTableCell> 
              </StyledTableRow>
            </> ))        
            :
              courseFilter?.map((grade) => (
          <>
            <StyledTableRow>
            <StyledTableCell component="th" scope="row">{grade.student.name}</StyledTableCell>
              <StyledTableCell align="right">{grade.course_name}</StyledTableCell>
              <StyledTableCell align="right">{grade.result}</StyledTableCell>
              <StyledTableCell align="right" className='table-btn'>✏️</StyledTableCell>
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