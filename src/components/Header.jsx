import VacaImage from '../assets/logo-cow.png'
import mooosic from '../assets/mooosic_logo.png'

function Header() {
    return (
        <>
            <div className='title'>
                <img className='logo' src={VacaImage} />
                <h1>MOOOSIC</h1>
                <img className='namelogo' src={mooosic} />
            </div>
        </>
    )
}

export default Header