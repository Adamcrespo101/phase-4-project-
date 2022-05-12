import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';


function Student ({currentUser}){

const [finalGrades, setFinalGrades]= useState([])

useEffect(() => {
fetch(`/report_card/${currentUser?.id}`)
.then(res => res.json())
.then(data => setFinalGrades(data))
},[currentUser?.id])
console.log(currentUser)
console.log(finalGrades)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      

    return (
        <>
        <div id="profile-img-container">
                <img id="profile-img" src="http://cdn.onlinewebfonts.com/svg/img_569204.png" alt="avatar" />
            </div>
        <div className="student_profile">
            <h1 id="profile-name">Student Profile:</h1>
            <div className="student_info">
                <h3>Name: {currentUser?.name}</h3>
                <h4>Student ID | Username: {currentUser?.username}</h4>
                <h4>Goal degree: {currentUser?.degree_type}</h4>
                <h4>Date of Birth: {currentUser?.date_of_birth}</h4>
                <h4>Expected Graduation Date: {currentUser?.expected_graduation}</h4>
            </div>
            <div className='student_grades'>
                <h2 id="grade_report">Grade Report:</h2>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {finalGrades?.map((grade) => {
        return(    
        
        <Grid item xs={4} md={8}>
            <Item>
            <ul key={grade}>Course: {grade?.course_name}</ul>
            <ul>Instructor: {grade?.teacher?.name}</ul>
            <ul>Final Grade: {grade?.result}</ul>
            <ul>Feedback: {grade?.feedback}</ul>
            </Item>
        </Grid>)
        })}
      </Grid>
    </Box>
        </div>
        </div>
        </>
    )
}

export default Student;