import "../styles/aboutstyle.css";
import img3 from "../images/about.jpg";
import icon1 from "../images/doctor.png";
import icon2 from "../images/hospital.png";
import icon3 from "../images/x-ray.png";
import icon4 from "../images/medal.png";
import React from "react";

function About()
{
    return(
        <div>
        <img class="about-img" src={img3} id="about" alt="about"/>
        <span style={{color:"rgba(34, 25, 198, 0.932)"}} class="about-text"><h1 >About</h1>
        A well-designed Hospital Management System can <br />significantly improve the overall efficiency of healthcare<br /> delivery, reduce paperwork, minimize errors, and<br /> enhance the overall quality of patient care. It also<br /> plays a crucial role in ensuring compliance with healthcare <br />regulations and standards.</span>
        <div class="car">
            <div class="card-body3">
       <span class="icon"><img src={icon1} alt="icon1" height="50" width="50"/>  25 Doctors</span> 
       <span class="icon"><img src={icon2} alt="icon2" height="50" width="50"/>  5  Departments</span>
       <span class="icon"><img src={icon3} alt="icon3" height="50" width="50"/>  36 Labs</span>
       <span class="icon"><img src={icon4} alt="icon4" height="50" width="50"/>  120 Achivements</span>
        </div>
        </div>
        </div>
        
           
        
    
    )
}
export default About;