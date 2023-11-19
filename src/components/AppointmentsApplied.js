import React from "react";
import {useEffect,useState} from "react";
import Axios from "axios";
import Appointmentsappliedrow from "./Appointmentsappliedrow.js";
function AppointmentsApplied()
{
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
    const Items=()=>
    {
        return arr.map((val,ind)=>{
            return <Appointmentsappliedrow obj={val}/>
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
        </div>
    )
}
export default AppointmentsApplied;