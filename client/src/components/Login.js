function Login () {
    return(
        <div className="contain">
            <div className="login">
                <img id="login-img"src="https://media.istockphoto.com/photos/rear-view-of-large-group-of-students-on-a-class-at-lecture-hall-picture-id1138138146?k=20&m=1138138146&s=612x612&w=0&h=4SW-OOG0hzel6pbYzsscwVe2nMiTzXknKcix6k4TfAc=" alt="college classroom"/>
                <form className="login_form">
                    <h2>Enter User login information or click signup to register a new teacher/student:</h2>
                <div className="form-inputs"> 
                <h3>Welcome!</h3>   
                <p>Username/Student ID:<input type="text" placeholder="Username or Student ID"/></p>
                <p>Password:<input type="password" placeholder="Password..."/></p>
                <button type="submit">Submit</button>
                <a href="/signup" id="signup_link">Need an Account? Click here to signup.</a>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;