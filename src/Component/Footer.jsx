import { Link } from "react-router-dom";
import './footer.css'; // Create this CSS file

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">About Us</h4>
          <p className="footer-text">We specialize in high-quality aromatic compounds and specialty chemicals, serving industries worldwide with sustainable solutions.</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/Product" className="footer-link">Products</Link></li>
            <li><Link to="/Infrastructure" className="footer-link">Infrastructure</Link></li>
            <li><Link to="/AboutUs" className="footer-link">About Us</Link></li>
           
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <ul className="contact-info">
            <li>📞+91 89236 97291 </li>
            <li>📞+91 79839 05205 </li>
            <li>📧 Zyansheikh786@gmail.com</li>
            <li>🏢 Area Nagran , Near Jama Masjid , Budaun (243601), Uttar Pradesh</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Raahat Chemicals. All rights reserved.</p>
        <div className="legal-links">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <span> | </span>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};