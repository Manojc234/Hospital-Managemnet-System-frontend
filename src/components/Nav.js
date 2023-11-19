import {Link} from "react-router-dom";
import img2 from "../images/LOGO.png";
import "../styles/coverstyle.css";
function Nav()
{
    const style={
            backgroundColor: "rgba(34, 25, 198, 0.932)",
            padding:"10px",
            textalign: "center"

    }
   
    return(
        <nav class="navbar" style={style}>
            <Link style={{fontFamily:"Nosifer"}} to="/" class="navbar-brand " ><img src={img2} alt="logo" height="50"/><span class="logo-text" style={{paddingLeft:25}}>MEDILAB</span></Link>
        <div class="nav">
        <Link to="/cover-page" class="nav-link text-light"><span class="nav-text">Home</span></Link>
        <Link to="/about" class="nav-link text-light"><span class="nav-text">About</span></Link><br />
        <Link to="/doctor-login" class="nav-link text-light"><span class="nav-text">Doctor</span></Link><br />
        <Link to="/patient-login" class="nav-link text-light"><span class="nav-text">Patient</span></Link><br />
        <Link to="/admin-login" class="nav-link text-light"><span class="nav-text">Admin</span></Link><br />
        <Link to="/gallery" class="nav-link text-light"><span class="nav-text">Gallery</span></Link><br />
        <Link to="/contact-us" class="nav-link text-light"><span class="nav-text">Contact Us</span></Link><br />
        </div>
        </nav>
    )
}
export default Nav;