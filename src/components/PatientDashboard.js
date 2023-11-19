import React,{useContext,useState,useEffect} from "react"
import {store} from "../App";
import {Link,Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import schedule from "../images/schedule.png";
function PatientDashboard()
{
    const [token,setToken]=useContext(store);
    const [data,setData]=useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("https://hospital-management-deployement-1.onrender.com/patientRoute/patient-dashboard",{
            headers:{
                "x-token":token
            }
        }).then(res=>{setData(res.data)
        })
        .catch((err)=>console.log(err))
    },[token]);
   
    const handleClick=(()=>{
       setToken(null);
       navigate("/patient-login");
       alert("logged Out");
    })
  
    if(!token)
    {
        return <Navigate to="/patient-login"/>
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
                    <li> <Link to="/patient-appointment" class="text-light text-decoration-none">Apply Appointment</Link></li>
                    
                </ul>
            </div>
            <div class="row">
                <div class="acol-3">
                <img class="img1" src={schedule} alt="icon1"/><br/>
                <Link to="/appointment-applied" class="text-light text-decoration-none">Appointments Applied</Link>
                </div>
                
            </div>
            </div>
    )
}
export default PatientDashboard;