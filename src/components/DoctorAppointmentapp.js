import React from "react";
import {useEffect,useState,useContext} from "react";
import { store } from "../App";
import Axios from "axios";
import DoctorAppointment from "./DoctorAppointment.js";

function DoctorAppointmentapp()
{
    const [token] = useContext(store);
    const[arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get('https://hospital-management-deployement-1.onrender.com/patientDetails/')
        .then((res)=>{
            if(res.status===200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>console.error(err));
    },[arr]);
    const handleApprove=(appointmentId)=>{
        Axios.put(`https://hospital-management-deployement-1.onrender.com/doctorRoute/approve-appointment/${appointmentId}`,null,{
            headers:{
                "x-token":token
            }
          })
        .then((res)=>{
            console.log(res.data.message);
            setArr((prevAppointments)=>
            prevAppointments.map((appointment)=>
            appointment._id===appointmentId ? {...appointment,status:'approved'}:appointment)
            );
        })
        .catch((error)=>
        {
            console.error("Error approving appointment",error.response?.data?.message||'Unknown error');
        });
    }
    const Items=()=>
    {
        return arr.map((val,ind)=>{
            return <DoctorAppointment obj={val}/>
        })
    }
    return(

        <div>
            <table class="table table-bordered table-striped table-primary">
                <thead>
                    <tr>
                        <th class="text-center">First Name</th>
                        <th class="text-center">Last Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">DOB</th>
                        <th class="text-center">Gender</th>
                        <th class="text-center">Appointment Date</th>
                        <th class="text-center">Specialization</th>
                        <th class="text-center">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Items()}
                </tbody>
               
            </table>
            <ul>
            {arr.map((appointment)=>(
           <li key={appointment._id}>
            {
                appointment.first_name
            }-{appointment.status}
            {appointment.status!=='approved'&&(

            <button class="btn btn-success " onClick={handleApprove}>Approve</button>
            )}
            </li>
            ))}
            </ul>
          
        </div>
    )
}
export default DoctorAppointmentapp;