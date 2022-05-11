import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login ({handleRadio, setCurrentUser, radioChange, setIsAuthenticated}) {


    const navigate = useNavigate()
    const [toggle, setToggle]= useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
        

    function handleToggle(){
        setToggle(prev => !prev)
    }

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hello')
        fetch(radioChange === "Teacher" ?
         "/login" : "/student/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user);
              setIsAuthenticated(true)
              navigate('/home')
            });
          } else {
            res.json().then((errors) => {
              console.error(errors);
            });
          }
        });
      };
    
     


    return(
        <div className="contain">
            <div className="login">
                <img id="login-img"src="https://media.istockphoto.com/photos/rear-view-of-large-group-of-students-on-a-class-at-lecture-hall-picture-id1138138146?k=20&m=1138138146&s=612x612&w=0&h=4SW-OOG0hzel6pbYzsscwVe2nMiTzXknKcix6k4TfAc=" alt="college classroom"/>
                <form className="login_form" onSubmit={handleSubmit}>
                    <h2>Enter User login information or click signup to register a new teacher/student:</h2>
                <div className="form-inputs"> 
                <h3>Welcome!</h3>   
                <p>Username/Student ID:<input type="text" required placeholder="Username or Student ID" name="username" value={formData.username} onChange={handleChange}/></p>
                <p>Password:<input type="password" required placeholder="Password..." value={formData.password} name="password" onChange={handleChange}/></p>
                
                <fieldset>
                    <legend>Select a user type:</legend>
                        <div>
                            <input type="radio" className="student-radio" name="Student" value="Student" checked={toggle ? false : true} onClick={handleToggle} onChange={handleRadio}/>
                            <label for="Student">Student</label>
                            </div>
                             <div>
                             <input type="radio" className="teacher-radio" name="Teacher" value="Teacher" checked={toggle ? true : false} onClick={handleToggle} onChange={handleRadio} />
                        <label for="Teacher">Teacher</label>
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
                <a href="/signup" id="signup_link">Need an Account? Click here to signup.</a>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;