import {Link} from "react-router-dom"
import axios from "axios"
import React,{useState,useContext} from "react";
import {store} from "../App.js";
import {Navigate} from "react-router-dom";
import "../styles/doctorandpatientstyle.css";
function DoctorLogin()
{
        const [token,setToken]=useContext(store)
        const[data,setData]=useState({
            email:'',
            password:'',
        })
        const handleChange=(event)=>
        setData({...data,[event.target.name]:event.target.value})

        const handleSubmit=(event)=>{
            event.preventDefault();
            axios.post('https://hospital-management-deployement-1.onrender.com/doctorRoute/doctor-login',data)
            .then(res=>setToken(res.data.token))
            .catch(err=>console.log(err))
            
        }
        if(token){
            return <Navigate to="/doctor-dashboard"/>
        }

    return(
        <div>
            <h1 class="text">Doctor Login</h1>
        <div class="body">
            <div class="login-container">
        <form onSubmit={handleSubmit} >
            <label  class="form-label">Email:</label>
            <input onChange={handleChange}class="form-control" type="email" name="email" placeholder="Enter your Email"/>
            <label class="form-label">Password:</label>
            <input onChange={handleChange}class="form-control" type="password" name="password" placeholder="Enter your Password"/>
            <button class="btn btn-primary my-3" type="submit" >Login</button><br />
        </form>
        <p class="text-light"><Link class="text-light " to="/sign-updoctor">signup?</Link></p>
        </div>
    </div>  
    </div> 
    );
}
export default DoctorLogin;