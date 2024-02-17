import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate()

  
    const submit = async (e) => {
      e.preventDefault();
      try {
       const response = await axios.post(`${process.env.REACT_APP_API_URL}/createUser`, {name, email, age})
       console.log(response)
       navigate('/')
      } catch (err) {
        console.log(err)
      }

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
     
      <div className='w-50 bg-white rounded p-3'>
      <Link to="/" className='btn btn-primary'>{'<'}Back</Link>
        <form onSubmit={submit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Name' className='form-control' required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' required 
               onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Age</label>
            <input type='number' placeholder='Enter Age' className='form-control' required 
               onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default CreateUser