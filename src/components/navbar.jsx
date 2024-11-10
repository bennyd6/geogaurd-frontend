import './navbar.css';
import logo from '../assets/icon.png';
import { Link,useLocation } from 'react-router-dom';

const isLoggedin=()=>{
    const token=sessionStorage.getItem('token');
    return !!token;
  }
  
  
  export default function Navbar() {
    const logged=isLoggedin()
    const location = useLocation()
    console.log(location.pathname)
    if(logged){
        return (
            <div className="nav-main">
                <img src={logo} alt="Logo" />
                <div className="nav-in">
                    <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to='/services' className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                    <Link to='/profile' className={location.pathname === '/profile' ? 'active' : ''}>Profile</Link>
                </div>
            </div>
        );
    }
    else{
        return(<></>);
    }
}
