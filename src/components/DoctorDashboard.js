import React,{useContext,useState,useEffect} from "react"
import {store} from "../App";
import {Link,Navigate,useNavigate} from "react-router-dom";
import axios from "axios";
import "../styles/doctordashboardstyles.css";
import schedule from "../images/schedule.png";



function DoctorDashboard()
{
  
    const [token,setToken]=useContext(store);
    const [data,setData]=useState(null);
    const navigate= useNavigate();
    useEffect(()=>{
        axios.get("https://hospital-management-deployement-1.onrender.com/doctorRoute/doctor-dashboard",{
            headers:{
                "x-token":token
            }
        }).then(res=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    if(!token)
    {
        return <Navigate to="/doctor-login"/>
    }
    const handleClick=()=>
    {
        setToken(null);
        navigate("/doctor-login");
        alert("logged Out");

    }
    return(
        <div>
            { data &&
            <div class="name">
                Welcome {data.name}
            </div>
            }
         
         <button class="logout" onClick={handleClick}>logout</button>
            <div>
                <ul class="dashboard" >
                    <br/>
                    <li><Link to="/doctor-appointment" class="text-light text-decoration-none">Appointments</Link></li>
                    
                    
                </ul>
            </div>
            <div class="row">
                <div class="acol-3">
                <img class="img1" src={schedule} alt="icon1"/><br/>
                <Link to="/doctor-appointment" class="text-light text-decoration-none">Appointments for you</Link>
                </div>
                
               
            </div>
            </div>
           
       
           
           
           
        
    )
}
export default DoctorDashboard;