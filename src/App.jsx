import {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import {About, Contacts, Home, Projects} from "./pages/index.js";


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-300/20'>
        <Navbar/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/projects'} element={<Projects/>}/>
            <Route path={'/contacts'} element={<Contacts/>}/>
        </Routes>
    </main>
  )
}

export default App
