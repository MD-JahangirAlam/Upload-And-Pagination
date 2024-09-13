import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Upload() {

    const [userFile, setUserFile] = useState('');

    const userUploadFile = async () =>{
        const formData = new FormData();
        formData.append('userphoto', userFile);

        const resUser = await axios.post('http://localhost:3000/upload', formData);
        console.log(resUser);
    }
    console.log(userFile);
    return (
        <div className='d-flex justify-content-center align-items-center bg-body-secondary' style={{height: '100vh'}}>
          <div className="w-600 p-4 bg-light">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control  type="file" onChange={(e) => setUserFile(e.target.files[0])}/>

            <button onClick={userUploadFile}  className='btn btn-success mt-3'>upload</button>
          </Form.Group>
          </div>
        </div>
      );
}

export default Upload