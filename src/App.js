
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Menu from './component/Menu'

function App(){
  return (
     <Router>
          <Menu/>
          <ToastContainer autoClose={4000} position={'top-right'}/>
             <Routes></Routes>
     </Router>

  )

}
export default App
