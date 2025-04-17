import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Field, Form, Formik } from 'formik'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/contactpage'
import UpdatePage from './pages/updatepage'
import FieldFill from './pages/formicpage'
import ErrorPage from './pages/formic page'
function App() {

  return (
    <BrowserRouter> 
     <NavLink to={"/home"} className={'nav'}>Home Page  </NavLink>
     <NavLink to={"/contact"} className={'nav'}>contact Page  </NavLink>
     <NavLink to={"/update"} className={'nav'}> Update Page  </NavLink>
     <NavLink to={"/field"} className={'nav'}> Formic  </NavLink>

     <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/update" element={<UpdatePage />} />
      <Route path="/field" element={<FieldFill />} />
      <Route path="/error" element={<ErrorPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
