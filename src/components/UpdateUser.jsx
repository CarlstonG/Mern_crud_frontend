import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';




function UpdateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const {id} = useParams() // catch value id
  const navigate = useNavigate();

  // const handleNav = () => {
  //   navigate('/')
  // }


  
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/getUser/${id}`);
        console.log(response);
        setName(response.data.name);
        setEmail(response.data.email);
        setAge(response.data.age);

      } catch (error) {
        console.log(error)
      }

    }
    fetchData();
  }, [id]) // initialize value id

  const Update = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/updateUser/${id}`, {name, email, age})
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
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input type='text' 
            placeholder='Enter Name' 
            className='form-control' 
            value={name}  // display value of name
            onChange={(e) => setName(e.target.value)} // target value for changes
            required/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input type='email' 
            placeholder='Enter Email' 
            className='form-control' 
            value={email} // display value of email
            onChange={(e) => setEmail(e.target.value)}  // target value for changes
            required/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Age</label>
            <input type='text' placeholder='Enter Age' className='form-control' 
            value={age} // display value of age
            onChange={(e) => setAge(e.target.value)}  // target value for changes
            required/>
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>

    </div>
  )
}

export default UpdateUser