import Appointment from "./Appointment.js";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect,useState} from "react";
function UpdateAppointment(props)
{
    const {id}=useParams();
    alert(id);
    const[initialValue,setInitialValue]=useState({
        first_name:"",
        last_name:"",
        email:"",
        dob:"",
        gender:"",
        appointment_date:"",
        doctor_specialization:"",
        description:""
    });
    const [newData,setNewData]=useState(null);
    useEffect(()=>{
    axios.get("https://hospital-management-deployement-1.onrender.com/patientDetails/update-appointment/"+id)
    .then((res)=>
    {
        if(res.status===200)
        {
            const{first_name,last_name,email,dob,gender,appointment_date,doctor_specialization,description}=res.data;
            setInitialValue({first_name,last_name,email,dob,gender,appointment_date,doctor_specialization,description});

        }
        else{
            
            
            Promise.reject();
        }
    })
    .catch((err)=>{
        alert(err)
    });
},[id])
const getState=(childData)=>
{
    setNewData(childData);
}
const handleSubmit=()=>{
    const data={first_name:newData[0],
        last_name:newData[1],
        email:newData[2],
        dob:newData[3],
        gender:newData[4],
        appointment_date:newData[5],
        doctor_specialization:newData[6],
        description:newData[7]
    };
    axios.put("https://hospital-management-deployement-1.onrender.com/patientDetails/update-appointment/"+id,data)
    .then((res)=>
    {
        if(res.status===200)
        {
            alert("record updated")
        }
        else{
            Promise.reject();
           
        }
    })
    .catch((err)=>alert(err));

}
    return(
        
            <form onSubmit={handleSubmit}>
                <Appointment getState={getState}first_nameValue={initialValue.first_name}
                                                last_nameValue={initialValue.last_name}
                                                emailValue={initialValue.email}
                                                dobValue={initialValue.dob}
                                                genderValue={initialValue.gender}
                                                appointment_dateValue={initialValue.appointment_date}
                                                doctor_specializationValue={initialValue.doctor_specialization}
                                                descriptionValue={initialValue.description}>
                                                Update patient{props.children}  </Appointment>
            </form>
        
    )
}
export default UpdateAppointment;