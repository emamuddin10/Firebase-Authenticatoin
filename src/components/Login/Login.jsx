import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signInUser}=useContext(AuthContext)
    const handlelogin = e =>{
        e.preventDefault()
        console.log(e)
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email,password)
        signInUser(email,password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log('Error',error)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center p-10">Login now!</h1>
          <form onSubmit={handlelogin} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
                If you new this website please <button className="btn"><Link to='/register'>Register</Link></button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
