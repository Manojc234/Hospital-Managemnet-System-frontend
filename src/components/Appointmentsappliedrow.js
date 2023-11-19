import axios from "axios";
import {Link} from "react-router-dom";
function Appointmentsappliedrow(props)
{
    const{_id,first_name,last_name,email,dob,gender,appointment_date,doctor_specialization,description}=props.obj;
    const handleClick=()=>
    {
        axios.delete("https://hospital-management-deployement-1.onrender.com/patientDetails/delete-patient/"+_id)
        .then((res)=>
        {
            if(res.status===200){
    
            alert("appointment deleted");
             window.location.reload();
            }
            else
            Promise.reject();
        })
        .catch((err)=>alert(err));
    }
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
            <td><button class="btn btn-success "><Link class="text-light text-decoration-none" to={"/update-appointment/"+_id}>Edit details</Link></button></td>
            <td><button onClick={handleClick} class="btn btn-danger">Delete</button></td>
        </tr>
        


    )
}
export default Appointmentsappliedrow;