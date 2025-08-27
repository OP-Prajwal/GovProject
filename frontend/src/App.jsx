import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Components/Register'
import StartPage from './Components/StartPage'
import GovRegister from './Components/GovRegister'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartPage></StartPage>}/>
      <Route path='/govregister' element={<GovRegister/>} />
      <Route path='/register' element={<Register/>}/>

     
    </Routes>
  )
}

export default App