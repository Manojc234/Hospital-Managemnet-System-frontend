
//import {Link} from "react-router-dom";
//import axios from "axios";
//import "./DoctorAppointmentapp.js"
function DoctorAppointment(props)
{
    //const{arr,setArr}=props.obj
    const{first_name,last_name,email,dob,gender,appointment_date,doctor_specialization,description}=props.obj;
  
   return(
        <tr>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>{dob}</td>
            <td>{gender}</td>
            <td>{appointment_date}</td>
            <td>{doctor_specialization}</td>
            <td>{description}</td>
            
           
           
            
        </tr>
        


    )
}
export default DoctorAppointment;