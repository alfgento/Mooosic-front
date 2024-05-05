import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {   
    return (
        <footer>
            <Link>About Us</Link>
            <Link>Work with us</Link>
            <Link>GDPR</Link>
                
            <h3>Follow us!</h3>
            <div className='isocial'>
                <Link to={"https://www.facebook.com"}><FaFacebook /></Link>
                <Link to={"https://www.x.com"}><FaXTwitter /></Link>
                <Link to={"https://www.instagram.com"}><FaInstagram /></Link>
                <Link to={"https://www.youtube.com"}><FaYoutube /></Link>
            </div>
        </footer>
    )
}

export default Footer