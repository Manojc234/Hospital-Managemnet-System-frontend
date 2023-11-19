import "../styles/contactstyle.css"
import mail from "../images/envelope.png";
import phone from "../images/phone.png";
function Contactus()

{
    return(
        <div>
        <h1 class="contact-text">Contact</h1>
        <iframe title="Medilab Hospitals" class="maps" width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Medilab%20Hospitals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
        <div class="icon-img">
        <a href="#y"><img class="icon-img1" src={phone} alt="phone"/>Call Us</a><br/><br/>
        <a href="#y"><img class="icon-img2" src={mail} alt="mail"/>Mail Us</a>
        </div>
        <div class="container-fluid">
            <span>
            <h1 class="footer-heading">QUICK LINKS</h1>
            <ul type="circle">
                <li>getting started</li>
                <li>login support</li>
                <li>Features and settings</li>
            </ul>
            </span>
            <span>
            <h1 class="footer-heading">COMMUNITY</h1>
            <ul type="circle">
                <li>FAQ's</li>
                <li>Community news</li>
                <li>Ideas</li>
                <li>Questions</li>
            </ul>
            </span>
            
        </div>
        </div>
    )
}
export default Contactus;