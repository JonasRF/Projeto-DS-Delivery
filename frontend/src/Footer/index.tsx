import './styles.css';
import youtube from '../asserts/images/youtube.svg';
import linkedin from '../asserts/images/linkedin.svg';
import instagram from '../asserts/images/instagram.svg';

const Footer = () => {
    return (
        <footer className='main-footer'>
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className='footer-icons'>
                <a href='https://www.youtube.com/c/DevSuperior' target='_new'>
                    <img src={youtube} alt="youtube" />
                </a>
                <a href='https://www.linkedin.com/school/devsuperior/' target='_new'>
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href='https://www.instagram.com/devsuperior.ig/'>
                    <img src={instagram} alt="instagram" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;