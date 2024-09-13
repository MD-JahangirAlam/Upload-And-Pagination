import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <main className='px-2 mt-5'>
        <Outlet />
      </main>
    </>
  )
}

export default App
