import React,{useContext,useState,useEffect} from "react"
import {store} from "../App";
import {Link,Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/adminDashboardstyle.css"
function AdminDashboard()
{
   
    const [token,setToken]=useContext(store);
    const [data,setData]=useState(null);
    
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("https://hospital-management-deployement-1.onrender.com/adminRoute/admin-dashboard",{
            headers:{
                "x-token":token
            }
        }).then(res=>{setData(res.data)
        })
        .catch((err)=>console.log(err))
    },[token]);
   
    const handleClick=(()=>{
       setToken(null);
       navigate("/admin-login");
       alert("logged Out");
    })
  
    if(!token)
    {
        return <Navigate to="/admin-login"/>
    }
  
      
    return(
        <div>
            { data &&
            <div class="name">
                Welcome {data.password}
            </div>
            }
        <div><button class="logout" onClick={handleClick}>logout</button></div>
        <div class="dashboard">
            <ul>
                <li><Link class="text-decoration-none text-light" to="/Admin-get">View Doctors</Link></li>
            </ul>
        </div>
        
      
        </div>

    )
}
export default AdminDashboard;