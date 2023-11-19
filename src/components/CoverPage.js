import "../styles/coverstyle.css";
import img1 from "../images/hero-bg.jpg";
import React from "react";

function CoverPage()

{
    
    return(
        <div class="contain">
            <img class="img" src={img1} alt="coverpage"/>
            <div class="textonimage1">
            <h1>WELCOME TO MEDILAB
                 </h1>
                </div>
            <div class="textonimage2">
                <p>The power of community to create health is far greater than any physician, clinic or hospital</p>
            </div>
            <div class="card">
                <div class="card-body text-light">
                    <h1>Why Medilab ?</h1>
                    <p>Given the competitive nature of the health<br /> market and the multiplicity of factors that may<br /> contribute towards patient’s choices of a hospital, <br />patients’ needs and preferences for a hospital<br /> must be considered in the planning and decision<br /> making of hospitals and health care organizations.</p>
                </div>
            </div>
            <div class="card2">
                <div class="card-body2 text-light">
                <h1>Our Services</h1>
                    <p>Medilab Hospital offers the very highest standards <br />of clinical skills and nursing care across<br /> a wide range of specialties. We are offering <br />a wide range of services in healthcare sector.<br /> Our focus is on high quality service at an <br />affordable price. Our promise is a quality-driven service</p>
                </div>
            </div>
          
        </div>
        
        
       

    )
    
}
export default CoverPage;
