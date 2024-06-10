import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to={'/'} className='w-20 
            flex-center '>
               <img src="/src/assets/icons/bird.png"/>
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