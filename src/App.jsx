import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import {About, Contacts, Publications, Home, Gallery   } from "./pages/index.js";


function App() {

    return (
        <main className='bg-white w-full h-full '>
            <BrowserRouter className="">
    
            <NavigationBar  />

         
                <Routes className="">
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/gallery'} element={<Gallery/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                    <Route path={'/publications'} element={<Publications />}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App
