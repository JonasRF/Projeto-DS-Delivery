import './styles.css';
import Logo from '../asserts/images/Group.svg';

const NavBar = () => {

    return (
        <nav className="main-navbar">
            <img src={Logo} alt='Logotipo' />
            <a href='home' className='logo-text'>DS Delivery</a>
        </nav>
    )
}

export default NavBar;