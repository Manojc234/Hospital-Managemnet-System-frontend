import "../styles/Appointment.css";
import {useState} from "react";
import axios from "axios";
function Appointment(props)
{
    const [data,setData]=useState({
        first_name: props.first_nameValue || '',
        last_name: props.last_nameValue || '',
        email: props.emailValue || '',
        dob: props.dobValue || '',
        gender: props.genderValue || '',
        appointment_date: props.appointment_dateValue || '',
        doctor_specialization: props.doctor_specializationValue || '',
        description: props.descriptionValue || ''

    });
    const handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
        console.log(setData);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://hospital-management-deployement-1.onrender.com/patientDetails/patient-appointment',data)
        .then(
            res=>{console.log(res.data)
                alert("appointment submitted");
                return setData({
                first_name:'',
                last_name:'',
                email:'',
                dob:'',
                gender:'',
                appointment_date:'',
                doctor_specialization:'',
                description:''
                

            })}
       
        ).catch(err=>{
            return console.log(err)
        })
       
        
    }
    return(
        
    

        <div>
            <center>
        <div class="body">
            
         <form onSubmit={handleSubmit}>
        <h2>Patient Application Form</h2>
        <label for="firstName">First Name:</label>
        <input defaultValue={props.first_nameValue} onChange={handleChange} type="text" id="firstName" name="first_name" placeholder="Enter your First Name" required/><br/>

        <label for="lastName">Last Name:</label>
        <input defaultValue={props.last_nameValue} onChange={handleChange} type="text" id="lastName" name="last_name" placeholder="Enter your Last Name"required/><br/>

        <label for="email">Email:</label>
        <input defaultValue={props.emailValue} onChange={handleChange} type="email" id="email" name="email" placeholder="Enter your Email" required/><br/>

        <label for="dob">Date of Birth:</label>
        <input defaultValue={props.dobValue} onChange={handleChange} type="date" id="dob" name="dob" required/><br/>

        <label for="gender">Gender:</label>
        <select defaultValue={props.genderValue} onChange={handleChange} id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select><br/>

        <label for="appointmentDate">Appointment Date:</label>
        <input defaultValue={props.appointment_dateValue} onChange={handleChange} type="date" id="appointmentDate" name="appointment_date" required/><br/>
        <label for="doctorSpecialization">Doctor Specialization:</label>
        <select defaultValue={props.doctor_specializationValue} onChange={handleChange} id="doctorSpecialization" name="doctor_specialization" required>
            <option value="dermatologist">Dermatologist</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="cardiology">Cardiology</option>
            <option value="ent">ENT</option>
            <option value="urology">Urology</option>
        </select><br />


        <label for="patientProblem">Description of Patient Problem:</label>
        <textarea defaultValue={props.descriptionValue}onChange={handleChange} id="patientProblem" name="description" rows="4" required></textarea><br />

        <input class="btn btn-primary" type="submit" value="Submit"/>
       </form>
       
    </div>
    </center>
    </div>
    )
}
export default Appointment;