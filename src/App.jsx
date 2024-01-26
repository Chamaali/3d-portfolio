import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import {About, Contacts, Home, Projects} from "./pages/index.js";


function App() {

    return (
        <main className='bg-slate-300/20 w-full h-full'>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App
