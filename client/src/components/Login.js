import { useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom'

function Login ({handleRadio, setCurrentUser, isAuthenticated}) {


    const navigate = useNavigate()
    const [toggle, setToggle]= useState(false)
    const [open, setOpen]= useState(false)
    const [error, setError]= useState([])
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
        

    function handleToggle(){
        setToggle(prev => !prev)
    }

    function handleOpen(){
        setOpen(prev => !prev)
    }

    function handleSignUp(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user);
            });
          } else {
            res.json().then((errors) => {
              console.error(errors);
            });
          }
        });
      };
    
      function navigateHome(){
        if (isAuthenticated){
          return  <Navigate to="/profile" replace={true}/>
        }
      }


    return(
        <div className="contain">
            <div className="login">
                <img id="login-img"src="https://media.istockphoto.com/photos/rear-view-of-large-group-of-students-on-a-class-at-lecture-hall-picture-id1138138146?k=20&m=1138138146&s=612x612&w=0&h=4SW-OOG0hzel6pbYzsscwVe2nMiTzXknKcix6k4TfAc=" alt="college classroom"/>
                <form className="login_form" onSubmit={handleSubmit}>
                    <h2>Enter User login information or click signup to register a new teacher/student:</h2>
                <div className="form-inputs"> 
                <h3>Welcome!</h3>   
                <p>Username/Student ID:<input type="text" placeholder="Username or Student ID" name="username" value={formData.username} onChange={handleChange}/></p>
                <p>Password:<input type="password" placeholder="Password..." value={formData.password} name="password" onChange={handleChange}/></p>
                
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
                <button type="submit" onClick={() => navigate('/profile')}>Submit</button>
                <a href="/signup" id="signup_link" onClick={handleOpen} >Need an Account? Click here to signup.</a>
                <div id="myModal" class="modal" style={open ? {display: "block"} : {display: "none"}}>
                <div class="modal-content">
                    <span class="close" onClick={handleOpen}>[x]</span>
                        <h3 className="modal-title">Create a new user:</h3>
                        <form className="new-user-form">
                        <label for="username">Username:       </label>
                        <input type="text" name="username" placeholder="Student ID or Teacher username" onChange={handleSignUp} value={formData.username}/>
                        <br/>
                        <label for="password">Password :             </label>
                        <input type="password" name="password" placeholder="Enter a password" onChange={handleSignUp} value={formData.password}/>
                        <p>Email:<input type="text" placeholder="name@example.com..." name="email" onChange={handleSignUp} value={formData.email}/></p>
                        <button type="submit" className="new-user-btn">submit</button>
                        </form>
                    </div>
                </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;