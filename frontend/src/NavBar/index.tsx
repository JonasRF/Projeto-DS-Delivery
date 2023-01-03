import './styles.css';
import Logo from '../asserts/images/Group.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="main-navbar">
            <img src={Logo} alt='Logotipo' />
            <Link to="/">
                <div className='logo-text'>DS Delivery</div>
            </Link>
        </nav>
    )
}

export default NavBar;