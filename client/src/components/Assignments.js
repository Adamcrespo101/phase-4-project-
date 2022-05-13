import { useEffect, useState } from 'react'
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Assignments({currentUser}) {

  const [currentCourses, setCurrentCourses]= useState([])
  const [courseName, setCourseName]= useState("All")

  useEffect(() => {
    fetch('/current_courses')
    .then(res => res.json())
    .then(data => setCurrentCourses(data))
  },[])

  
  
  const filterCourses = currentCourses?.filter((course) => course?.student_id === currentUser?.id)

  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

randomDate(new Date(2022, 5, 1), new Date())
  


  console.log(filterCourses)

  return (
      <div className="assignment_container">
        <h1>Assignments for {currentUser?.name}</h1>
        
        {filterCourses.map((course) => {
   return( <div className='assignment-cards'key={course.course_name}>
            <h4>Course: {course.course_name}</h4>
            <p className='upcoming'>Upcoming assignments due:</p>
            <p>_______________________________</p>
            <table id="table">
            <tr>
                  <td><strong>Assignment</strong></td>
                  <td><strong>Due Date</strong></td>
                  <td><strong>Description</strong></td>
                </tr>
            {course.assignments.map((assignment) => {
              return(
                <>
                
                <tr  className='assignment-content' >
                  <td className='assignment-content'>{assignment.name}</td>
                  <td className='assignment-content' key={assignment.id}>{randomDate(new Date(2022, 5, 1), new Date())}</td>
                  <td className='assignment-content'>{assignment.description}</td>
                </tr>
                </>
              )
            })}
            </table>
          </div>
        )})}
      </div>
  );
}

export default Assignments;