import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Sidebar({setCurrentUser, currentUser, setIsAuthenticated, isAuthenticated}) {
    
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()
    function handleBar () {
        setOpen(prev => !prev)
    }

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                  navigate('/login')
                }
                setCurrentUser(null)
                setIsAuthenticated(false)
            })
      }

return (
    <>
    <header className="header">
        <button className="header__button" id="btnNav" type="button">
        <div className="container" onClick={handleBar}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        </button>
        <button className={!isAuthenticated ? "logout-btn x-button logged_out" : "logout-btn x-button"} onClick={handleLogout}>Log Out</button>
        </header>
        <nav className={open ? "nav" : "nav nav--open"}>
            <div className="nav__links">
                <p onClick={handleBar} className="x-button">[x]</p>
                {!isAuthenticated ?  <a href="/login" className="nav__link">Login</a> : null}
                {isAuthenticated ? <a href="/" className="nav__link"><i>🏠</i> Home</a> : null}
                {!isAuthenticated ? <a href="/signup" className="nav__link"><i>📝</i>Sign Up</a> : null}
                {isAuthenticated ? <a href="/profile" className="nav__link"><i>👤</i> Profile</a> : null}
                {isAuthenticated ? <a href="/calendar" className="nav__link"><i>📅</i> Calendar</a> : null}
            </div>
            <div className="nav__overlay"></div>
        </nav>
    </>
)
}

export default Sidebar;