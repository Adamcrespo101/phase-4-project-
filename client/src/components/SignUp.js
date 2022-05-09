import { useState } from "react"
import { useParams } from 'react-router-dom'

function SignUp ({radioChange, setRadioChange}) {
    let params = useParams()
    const [errors, setErrors]= useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
    })


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
    //radioChange ? `/students/${params.id}` :  
        fetch(`/teachers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
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
      }
    return(
        <form className="new-user-form">
          <img id="signup-img" src="https://cdn.firespring.com/images/ee612d58-b43d-4530-93a8-9d4ebbd9a6ba.jpg" alt="college lecture hall" />
            <h3 className="modal-title">Create a new user:</h3>
            <div className="form-inputs">
                <p>Email:<input type="text" placeholder="name@example.com..." name="email" onChange={handleSignUp} value={formData.email}/></p>
            <label for="username">Username:       </label>
                <input type="text" name="username" placeholder="Student ID or Teacher username" onChange={handleSignUp} value={formData.username}/>
                    <br/>
                    <label for="password">Password :             </label>
                    <input type="password" name="password" placeholder="Enter a password" onChange={handleSignUp} value={formData.password}/>
                    <br/>
            <button type="submit" className="new-user-btn">submit</button>
            </div>
        </form>
    )
}

export default SignUp;