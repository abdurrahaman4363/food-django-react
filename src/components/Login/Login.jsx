import React, { useState } from 'react';

const Login = () => {
    const [login,setLogin] = useState({email:'',password:''})

    const handleChange = (e) =>{
       setLogin({
        ...login,
        [e.target.name]:e.target.value,
       })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(login);
    }


    return (
        <div className="hero min-h-screen bg-base-200">

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={handleChange} name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={handleChange} name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
};

export default Login;