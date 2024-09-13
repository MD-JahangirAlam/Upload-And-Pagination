import React from 'react'

function UserFormHelper({children}) {
  return (
    <div className="user-login d-flex align-items-center">
            <div className='container'>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8 d-flex justify-content-start">
                        {children}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserFormHelper