import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to={'/'} className='w-20 h-10 rounded-lg bg-white
            flex-center font-bold shadow-md'>
                <p className='blue-gradient_text'>Hi !</p>
            </NavLink>
           <nav className='flex text-sm lg:text-lg gap-7 font-medium'>
               <NavLink to={'/about'} className={({isActive}) => isActive? 'blue-gradient_text': 'text-black'}>
                   About
               </NavLink>
               <NavLink to={'/projects'} className={({isActive}) => isActive? 'blue-gradient_text': 'text-black'}>
                   Projects
               </NavLink>
               <NavLink to={'/contacts'} className={({isActive}) => isActive? 'blue-gradient_text': 'text-black'}>
                   Contacts
               </NavLink>
           </nav>
        </header>
    );
};

export default Navbar;