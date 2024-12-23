
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

     const HandalRegister = e=>{

        e.preventDefault();
         
        const name = e.target.name.value;
        const email =e.target.email.value;
        const password = e.target.password.value;

        console.log( email , password , name)
     }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
            <form onSubmit={HandalRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
      
              <p > Already have a account ? Please <Link className='underline text-green-200' to={'/login'}>Login</Link></p>
            </form>
            
          </div>
        </div>
              </div>
    );
};

export default Register;