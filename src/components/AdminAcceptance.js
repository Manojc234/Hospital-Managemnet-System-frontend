
import "../styles/admindoctorstyle.css"
//import {Link} from "react-router-dom";
function AdminAcceptance(props)
{
    const{name,email,password}=props.obj;
   
   return(
        <span class="card">
            <ul type="none" class="text-light">
            <li>NAME: {name}</li>
            <li>EMAIL:  {email}</li>
            <li>PASSWORD:  {password}</li>
            </ul>
          
        </span>
        


    )
}
//<td><button class="btn btn-success ">Accept</button></td>
//<td><button class="btn btn-danger">Decline</button></td>
export default AdminAcceptance;