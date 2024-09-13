import React from 'react'
import { Link } from 'react-router-dom'
import { LuLogIn } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";

function NavBar() {
    return (
        <div className='nav-container'>
            <div className="nav-body">
                <div className="nav-logo">
                    <Link to='/' className='d-flex align-items-center'>
                        <AiOutlineHome className='home-icon' />
                        <h3>transform <span>app</span></h3>
                    </Link>
                </div>
                <div className="nav-link-box">
                    <div className="bar-box align-items-center">
                        <FaBarsStaggered />
                    </div>
                    <ul className='uls'>
                        <li>
                            <Link>home</Link>
                        </li>
                        <li>
                            <Link to={'/userupload'}>about</Link>
                        </li>
                        <li>
                            <Link to={'/product'}>product</Link>
                        </li>
                        <li>
                            <Link>service</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-signup-box">
                    <div className="signup-body">
                        <Link to={'/userlogin'}>
                            <LuLogIn />
                        </Link>
                    </div>
                    <div className="signup-body">
                        <Link to={'/register'}>
                            <LuLogIn className='signup-tow' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar