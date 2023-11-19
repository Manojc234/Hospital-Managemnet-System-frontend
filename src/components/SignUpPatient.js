import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../styles/doctorandpatientstyle.css";
function SignUpPatient()
{
    const [data,setData] = useState({
        name:'',
        email:'',
        password:''
        
    })
    const handleChange=(event)=>
    {
        setData({...data,[event.target.name]:event.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://hospital-management-deployement-1.onrender.com/patientRoute/sign-uppatient',data)
        .then(
            res => {alert(res.data);setData({
                name:'',
                email:'',
                password:''
                
            })}
        )
        .catch(err=>console.log(err))
    }
    const handleClick=()=>
    {
        <Link to="/patient-login"></Link>
    }

  
    return(
        <div>
            <h1 class="text">Patient Signup</h1>
        <div class="body">
            <div class="login-container">
        <form onSubmit={handleSubmit}>
        <label class="form-label">Name:</label>
        <input onChange={handleChange}/*defaultValue={props.Namevalue}*/ class="form-control" type="text" name="name" placeholder="Enter your Name" />
        <label class="form-label">Email:</label>
        <input onChange={handleChange}/*defaultValue={props.Emailvalue}*/ class="form-control" type="email" name="email" placeholder="Enter your Email" />
        <label class="form-label">Password:</label>
        <input onChange={handleChange}/*defaultValue={props.Passwordvalue}*/ class="form-control" type="password" name="password" placeholder="Enter your Password" />
        <button class="btn btn-primary" type="submit" onClick={handleClick}>Register</button>
        </form>
        </div>
        </div>
    </div>
    

    )
}
export default SignUpPatient;