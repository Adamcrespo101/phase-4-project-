import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function SignUp () {
    const navigate = useNavigate()
    const [errors, setErrors]= useState([])
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
    })
    const [formState, setFormState]= useState(true)

    function handleSignUp(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleChange = (e) => {
        setFormData({
          ...formData,
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

        function changeToStudent(){
          setFormState(true)
        }

        function changeToTeacher(){
          setFormState(false)
        }
      
    return(
      <div className="signup">
          <img id="signup-img" src="https://cdn.firespring.com/images/ee612d58-b43d-4530-93a8-9d4ebbd9a6ba.jpg" alt="college lecture hall" />
          <div className="toggle-forms">
        <form className="login_form" onSubmit={handleSubmit}>
            
            <div className="form-inputs">
            {!formState ? 
              <>
              <p className="x-button" onClick={changeToStudent}>Student Sign up Form</p>
            <p className="x-button" onClick={changeToTeacher}>Teacher Sign up Form</p>
                <h3 className="modal-title">Create a new teacher:</h3>
                <p>Email:<input type="text" placeholder="name@example.com..." name="email" onChange={handleSignUp} value={formData.email}/></p>
            <label for="username">Username:       </label>
                <input type="text" name="username" placeholder="Student ID or Teacher username" onChange={handleSignUp} value={formData.username}/>
                    <br/>
                    <label for="password">Password :             </label>
                    <input type="password" name="password" placeholder="Enter a password" onChange={handleSignUp} value={formData.password}/>
                    <br/>
            <button type="submit" className="x-button">Submit</button>
            </>
          :
          <>
          <p className="x-button" onClick={changeToStudent}>Student Sign up Form</p>
            <p className="x-button" onClick={changeToTeacher}>Teacher Sign up Form</p>
                <h3 className="modal-title">Create a new Student:</h3>
                <p>Email:<input type="text" placeholder="name@example.com..." name="email" onChange={handleSignUp} value={formData.email}/></p>
            <label for="username">Username:       </label>
                <input type="text" name="username" placeholder="Student ID or Teacher username" onChange={handleSignUp} value={formData.username}/>
                    <br/>
                    <label for="password">Password :             </label>
                    <input type="password" name="password" placeholder="Enter a password" onChange={handleSignUp} value={formData.password}/>
                    <br/>
            <button type="submit" className="x-button">submit</button>
            </>
          }
            </div>
        </form>
        </div>
        </div>
    )
}

export default SignUp;