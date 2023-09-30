import React from 'react'
import {Routes,Route} from "react-router-dom"
import Dashboard from '../Screens/Dashboard'
import Login from '../Screens/Login'
 import ProjectList from '../Screens/ProjectList'
 import AddProject from '../Screens/AddProject'
 import PrivateRoute from '../AllRoutes/PrivateRoutes'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        <Route path='/list' element={<ProjectList/>} />
        <Route path='/add-project' element={<AddProject/>} />
        <Route path='/login' element={<Login/>} />
    </Routes>
  )
}

export default MainRoutes