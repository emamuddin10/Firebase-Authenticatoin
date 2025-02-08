
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const {createUser}=useContext(AuthContext)
    // console.log(createUser)
    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value 
        const password = e.target.password.value 

        console.log(name,email,password)

        // create user 
        createUser(email,password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error=>{
           console.log('Error',error.message)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center p-10">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              
              <button className="btn btn-success mt-4">Login</button>
            </fieldset>
            <p>
                If you have already account please <button className="btn"><Link to='/login'>Login</Link></button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
