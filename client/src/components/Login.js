function Login () {
    return(
        <div>
            <div className="login">
                <form className="login_form">
                <input type="text" placeholder="enter username"/>
                <input type="password" placeholder="enter password"/>
                <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;