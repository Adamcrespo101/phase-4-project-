import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import chalkboard from '../images/chalkboard.jpg'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function SignUp ({setIsAuthenticated}) {
    const navigate = useNavigate()
    const [errors, setErrors]= useState([])
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        subject: '',
        school: '',
        thumbnail: ''
    })
    const [studentFormData, setStudentFormData] = useState({
      name: '',
      password: '',
      email: '',
      date_of_birth: '',
      degree_type: '',
      expected_graduation: ''
  })
    const [formState, setFormState]= useState(true)



    function handleSignUp(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleStudentChange = (e) => {
        setStudentFormData({
          ...studentFormData,
          [e.target.name]: e.target.value,
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
    
        const userCreds = { ...formData }; 
        fetch(`/teachers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              console.log(user)
             // setCurrentUser(user);
              navigate('/login')
            });
          } else {
            res.json().then((errors) => {
              console.error(errors);
            });
          }
        });
      }

      function handleStudentSubmit(e) {
        e.preventDefault();
    
        const userCreds = { ...studentFormData }; 
        fetch(`/students`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              console.log(user)
             // setCurrentUser(user);
              navigate('/login')
            });
          } else {
            res.json().then((errors) => {
              console.error(errors);
            });
          }
        });
      }

        function changeToStudent(){
          setFormState(prev => !prev)
        }

        console.log(studentFormData.date_of_birth)
      
    return(
      <div className="signup">
        

          <img src={chalkboard} alt="chalkboard" className="home_img"/>
          <div class='form-on-image'>
            
            <div className="signup-inputs">
            {formState ? 
              <>
              <form className="login_form" onSubmit={handleSubmit}>
              <p className="x-button" onClick={changeToStudent}>Signing up as a student?</p>
            
                <h3 style={{color: "black"}}>New Teacher Form:</h3>
                <p>Email:<input type="text" required placeholder="name@example.com..." name="email" onChange={handleSignUp} value={formData.email}/></p>
                <label for="name">Name :             </label>
                    <input type="text" name="name" required placeholder="Enter full name" onChange={handleSignUp} value={formData.name}/>
                    <br/>
            <label for="username">Username:       </label>
                <input type="text" name="username" required placeholder="username..." onChange={handleSignUp} value={formData.username}/>
                    <br/>
                    <label for="password">Password :             </label>
                    <input type="password" name="password" required placeholder="Enter a password" onChange={handleSignUp} value={formData.password}/>
                    <br/>
                    <label for="subject">Teacher Subject :             </label>
                    <input type="text" name="subject" required placeholder="Enter Subject..." onChange={handleSignUp} value={formData.subject}/>
                    <br/>
                    <label for="school">University :             </label>
                    <input type="text" name="school" required placeholder="Enter your university" onChange={handleSignUp} value={formData.school}/>
                    <br/>
                    <label for="password">Thumbnail :             </label>
                    <input type="text" name="thumbnail" required placeholder="Enter a thumbnail URL..." onChange={handleSignUp} value={formData.thumbnail}/>
                    <br/>
            <button type="submit" className="x-button">Submit</button>
            </form>
            </>
          :
          <>
          <form className="login_form" onSubmit={handleStudentSubmit}>
          <p className="x-button" onClick={changeToStudent}>Signing up as a teacher?</p>
            <h3 style={{color: "black"}}>New Student Form:</h3>
                <p>Email:<input type="text" required placeholder="name@example.com..." name="email" onChange={handleStudentChange} value={studentFormData.email}/></p>
                <label for="name">Full Name:       </label>
                <input type="text" name="name" required placeholder="Enter first and last name..." onChange={handleStudentChange} value={studentFormData.name}/>
                    <br/>
            <label for="username">Username:       </label>
                <input type="text" name="username" required placeholder="format: #######-# or enter a specific username" onChange={handleStudentChange} value={studentFormData.username}/>
                    <br/>
                    <label for="password">Password :             </label>
                    <input type="password" name="password" required placeholder="Enter a password" onChange={handleStudentChange} value={studentFormData.password}/>
                    <br/>
                    <label for="degree_type">Degree Path/Major:       </label>
                    <input type="degree_type" name="degree_type" required placeholder="Enter degree path/major " onChange={handleStudentChange} value={studentFormData.password}/>
                    <br/>
                    <div id="birthday">
                    <Stack component="form" noValidate spacing={3}>
                  <TextField id="date" label="Date of birth:" type="date" required defaultValue="2017-05-24" sx={{ width: 220 }} name="date_of_birth" onChange={handleStudentChange} value={studentFormData.date_of_birth} InputLabelProps={{shrink: true,}}/>
                    </Stack>
                    </div>
                  <button type="submit" className="x-button">Submit</button>
            </form>
            </>
          }
            </div>
        </div>
       
        </div>
    )
}

export default SignUp;