import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="nav_container">
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            />

            <img 
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            />
        </div>

     );
}
 
export default Navbar;