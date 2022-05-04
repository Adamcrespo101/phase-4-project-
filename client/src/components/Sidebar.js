import { useState } from "react";

function Sidebar() {

    const [open, setOpen] = useState(true)

    function handleBar () {
        setOpen(prev => !prev)
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
        </header>
        <nav className={open ? "nav" : "nav nav--open"}>
            <div className="nav__links">
                <p onClick={handleBar} className="x-button">[x]</p>
                <a href="/login" className="nav__link">Login/Signup</a>
                <a href="/home" className="nav__link"><i>🏠</i> Home</a>
                <a href="/grades" className="nav__link"><i>✏️</i> Grades</a>
                <a href="/profile" className="nav__link"><i>👤</i> Profile</a>
            </div>
            <div className="nav__overlay"></div>
        </nav>
    </>
)
}

export default Sidebar;