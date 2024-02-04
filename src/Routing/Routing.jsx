import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
    </Routes>
  )
}

export default Routing