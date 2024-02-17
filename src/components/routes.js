import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';


function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/update/:id" element={<UpdateUser />} />
    </Routes>
  )
}

export default Approutes