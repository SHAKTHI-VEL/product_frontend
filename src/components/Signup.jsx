import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Signup = () => {
  const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
  let navigate = useNavigate(); 
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch("https://product-4kdu.onrender.com/user/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password})
    });
    const json = await response.json()
    if (json.success){
        localStorage.setItem('token', json.token); 
        navigate("/");

    }
    else{
        alert(json.message);
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <>
    <Navbar/>
    <div className="container mt-3">
    <h1 className="my-2">SignUp</h1>
      <form onSubmit={handleSubmit}> 
      <div className="mb-3 my-3">
    <label htmlFor="name" className="form-label" >Username</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} minLength={3}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}  value={credentials.email} />
    <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" minLength={5} required  onChange={onChange} />
  </div>
  

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}

export default Signup