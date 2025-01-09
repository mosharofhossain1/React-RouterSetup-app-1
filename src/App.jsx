
import { Outlet } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'

function App() {


  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  )
}

export default App
