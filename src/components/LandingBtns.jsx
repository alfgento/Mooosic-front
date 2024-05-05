import { Link } from "react-router-dom";
import './LandingBtns.css'

function LandingButtons () {
    return (
        <div className='login'>
            <Link to='log-in'><h2>Login</h2></Link>
            <Link to='sign-up'><h2>Sign Up</h2></Link>
        </div>
    )
}

export default LandingButtons