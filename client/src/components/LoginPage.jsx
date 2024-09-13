import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import UserFormHelper from './helper/UserFormHelper';


function LoginPage() {
    return (
        <UserFormHelper>
            <div className="form-body">
                <div className="form-header">
                    <div className="form-logo d-flex justify-content-center">
                        <div className="user-body">
                            <FaUser />
                        </div>
                    </div>
                    <h3 className='py-1 text-center text-capitalize text-primary'>User Login</h3>
                </div>
                <form className='form'>
                    <div className="form-group mt-3">
                        <label htmlFor="user-email" className="form-label">Email</label>
                        <input className='form-control' type="email" id='user-email' placeholder='Enter Email' />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="user-password" className="form-label">Password</label>
                        <input className='form-control' type="password" id='user-password' placeholder='Enter Password' />
                    </div>
                    <div className="form-group my-4">
                        <button className="btn btn-primary">Login</button>
                        <div className="form-text-box">
                            <p>if you do not have an account <Link to={'/register'}>Pegister</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </UserFormHelper>
    )
}

export default LoginPage