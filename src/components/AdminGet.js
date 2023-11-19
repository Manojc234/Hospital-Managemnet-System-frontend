import React from "react";
import {useEffect,useState,useContext} from "react";
import Axios from "axios";
import { store } from "../App";
import AdminAcceptance from "./AdminAcceptance.js";
import "../styles/admindoctorstyle.css";
function AdminGet()
{
   const [token] = useContext(store);
    const [doctors, setDoctors] = useState([]);
    //const[arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get('https://hospital-management-deployement-1.onrender.com/doctorRoute/signup-doctor')
        .then((res)=>{
            if(res.status===200)
                setDoctors(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>console.error(err));
    },[doctors]);
    const handleApprove = async (doctorId) => {
        try {
          const res = await Axios.put(`https://hospital-management-deployement-1.onrender.com/doctorRoute/approve-doctor/${doctorId}`,null,{
            headers:{
                "x-token":token
            }
          });
          console.log(res.data.message);
          
          setDoctors((prevDoctors) =>
            prevDoctors.map((doctor) =>
              doctor._id === doctorId ? { ...doctor, isApproved: true } : doctor
            )
          );
        } catch (error) {
          console.error('Error approving doctor:', error.response?.data?.message||"Unknown error");
        }
      }
 
    
    const ListItems=()=>
    {
        return doctors.map((val,ind)=>{
            return <AdminAcceptance key={val.id} obj={val}/>
        })
    }
    return(

        <div>
           
                <span >
                    {ListItems()}
                    <br/>
                    <ul type="none">
                    {doctors.map((doctor) => (
                    <li className="approves" key={doctor._id}>
                    {doctor.name} - {" "}
                    {doctor.isApproved ? 'Approved' : 'Pending Approval'}
                    {!doctor.isApproved && (
                    <button onClick={() => handleApprove(doctor._id)}class="btn btn-success">Approve</button>
                    )}
                    </li>
                ))}
                </ul>
                   
                </span>
            
        </div>
    );
}
export default AdminGet;