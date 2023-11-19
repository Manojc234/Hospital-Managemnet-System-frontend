import gallery1 from "../images/gallery-1.jpg"
import gallery2 from "../images/gallery-2.jpg"
import gallery3 from "../images/gallery-3.jpg"
import gallery4 from "../images/gallery-4.jpg"
import gallery5 from "../images/gallery-5.jpg"
import gallery6 from "../images/gallery-6.jpg"
import gallery7 from "../images/gallery-7.jpg"
import gallery8 from "../images/gallery-8.jpg"
import "../styles/gallerystyle.css";
function Gallery()
{
    return(
        <div>
            <h1 class="gallery-text">Gallery</h1>
        <div class="container">
        <img class="g1"src={gallery1} alt="gallery1"/>
        <img class="g2"src={gallery2} alt="gallery2"/>
        <img class="g3"src={gallery3} alt="gallery3"/>
        <img class="g4"src={gallery4} alt="gallery4"/>
        <img class="g5"src={gallery5} alt="gallery5"/>
        <img class="g6"src={gallery6} alt="gallery6"/>
        <img class="g7"src={gallery7} alt="gallery7"/>
        <img class="g8"src={gallery8} alt="gallery8"/>
        </div>
        </div>

    )
}
export default Gallery;