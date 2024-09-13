import React from 'react'
import UserFormHelper from './helper/UserFormHelper';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Register() {
    return (
        <UserFormHelper>
            <div className="form-body py-2 px-3">
                <div className="form-header">
                    <div className="form-logo d-flex justify-content-center">
                        <div className="user-body">
                            <FaUser />
                        </div>
                    </div>
                    <h3 className='py-1 text-center text-capitalize text-primary'>user register</h3>
                </div>
                <form className='form'>
                    <div className="form-group mt-1">
                        <label htmlFor="user-name" className="form-label mb-0">Name</label>
                        <input className='form-control' type="text" id='user-name' />
                    </div>
                    <div className="form-group mt-1">
                        <label htmlFor="user-email" className="form-label mb-0">Email</label>
                        <input className='form-control' type="email" id='user-email' />
                    </div>
                    <div className="form-group mt-1">
                        <label htmlFor="user-password" className="form-label mb-0">Password</label>
                        <input className='form-control' type="password" id='user-password' />
                    </div>
                    <div className="form-group mt-1">
                        <label htmlFor="user-confirm-password" className="form-label mb-0">Confirm-Password</label>
                        <input className='form-control' type="password" id='user-confirm-password' />
                    </div>
                    <div className="form-group my-2">
                        <button className="btn btn-primary">login</button>
                        <div className="form-text-box">
                            <p>if you have an account <Link to={'/userlogin'}>login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </UserFormHelper>
    )
}

export default Register