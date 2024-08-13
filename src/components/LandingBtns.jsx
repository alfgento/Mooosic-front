import { Link } from "react-router-dom";
import './LandingBtns.css'

function LandingButtons () {
    return (
        <div className='login'>
            <Link to='log-in'><button>Login</button></Link>
            <Link to='sign-up'><button>Sign Up</button></Link>
        </div>
    )
}

export default LandingButtons