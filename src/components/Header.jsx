import VacaImage from '../assets/logo-cow.png'

function Header() {
    return (
            <div className='title'>
                <img className='logo' src={VacaImage} />
                <h1>MOOOSIC</h1>
            </div>
    )
}

export default Header