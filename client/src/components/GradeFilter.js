import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import StudentGradesContainer from './StudentGradesContainer';

function GradeFilter({studentsArr, StyledTableCell, StyledTableRow}){
    
    const [grades, setGrades]= useState([])

    useEffect(() => {
        fetch('/grades/1')
        .then(res => res.json())
        .then(data => setGrades(data))
    },[])

    const names = studentsArr?.map((student) => {
        return <StyledTableCell component="th" scope="row">{student.name}</StyledTableCell>
    })

    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell align="right">Course</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
            <StyledTableCell align="right">Feedback</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
           
       {grades?.map((grade) => (
           <>
            <StyledTableRow>
            <StyledTableCell component="th" scope="row">{grade.student.name}</StyledTableCell>
              <StyledTableCell align="right">{grade.course_name}</StyledTableCell>
              <StyledTableCell align="right">{grade.result}</StyledTableCell>
              <StyledTableCell align="right">{grade.feedback}</StyledTableCell> 
              <StyledTableCell align="right" className='table-btn'>✏️</StyledTableCell>
              <StyledTableCell align="right" className='table-btn'>❌</StyledTableCell>
              </StyledTableRow>
            </>
              ))}
        </TableBody>
      </Table>
    </TableContainer> 
    )
}

export default GradeFilter;