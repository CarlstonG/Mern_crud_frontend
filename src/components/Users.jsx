import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() =>{

    try {
        axios.get(`${process.env.REACT_APP_API_URL}/`)
        .then(result => setUsers(result.data))
    } catch (error) {
        console.log(error)
    }
  }, [])

  const navigate = useNavigate();
  const handleNav = (userId) =>(
    navigate(`/update/${userId}`)
  )
  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/deleteUser/${id}`)
        .then(res => {
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err));
}
  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success mb-1'>Add +</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={index} className='m-2'>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td><button 
                onClick={() => handleNav(user._id)} className='btn btn-info'>Edit</button> 
                <button onClick={(e) => handleDelete(user._id)} className='btn btn-warning m-2'>Delete</button></td>
              </tr>
            )
            )
          }
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users