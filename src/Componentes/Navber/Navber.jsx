
import React, { useContext, useReducer } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../../Context/Userprovider';

const Navber = () => {

  const {user , logOut }=useContext(AuthContex)


  const HandalSignOut = () =>{

     logOut()
     .then( () =>{
      console.log('please logOut')

     })
     .then( () =>{
      console.log(error.message)
     })
  }

    const navlinks = <>
         
         <li> <NavLink to={'/'}>Home</NavLink></li>
         <li> <NavLink to={'/login'}>Login</NavLink></li>
         <li> <NavLink to={'/register'}>Register</NavLink></li>
         <li> <NavLink to={'/orders'}>Orders</NavLink></li>
         
         { user &&
           <>
          <li> <NavLink to={'/perches'}>Perches</NavLink></li>
          <li> <NavLink to={'/dashbord'}>Dashbord</NavLink></li>
          </>
         }        
    
    </>

    return (
        <>
            
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       
       {navlinks}

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <span> {user.email}
      <a onClick={HandalSignOut} className="btn btn-sm">Sign-Out</a> </span>
      : <Link to={'/login'}> </Link>
    }
   
  </div>
</div>
        </>
    );
};

export default Navber;