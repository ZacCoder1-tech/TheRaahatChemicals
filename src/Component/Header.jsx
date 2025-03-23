import { Link } from "react-router-dom";
import "./Header.css"; // Create this CSS file
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


export const Header = () => {
  return (
    <header className="header">
       <nav className="navbar">
      <div className="nav-left">
        <h1 className="logo">Rahat Chemicals</h1>
      </div>
      <div className="nav-right">
        <div className="nav-item">
          <FaMapMarkerAlt className="nav-icon" />
          <span id='fs-2'> Area Nagran , Near Jama Masjid , Budaun (243601), Uttar Pradesh</span>
        </div>
        <div className="nav-item">
          <FaPhoneAlt className="nav-icon" />
          <span>+91 89236 97291</span>|
          <span>+91 79839 05205</span>
        </div>
      </div>
    </nav>
      <nav className="navbar" style={{width:'55%',marginLeft:'23%'}}>
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/Infrastructure" className="nav-link">Infrastructure</Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};