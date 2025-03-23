import { FaWarehouse, FaMicroscope, FaLeaf, FaCogs, FaCertificate } from 'react-icons/fa';
import './Infrastructure.css';

export const Infrastructure = () => {
  return (
    <div className="infrastructure-page">
      {/* Hero Section */}
      <section className="infra-hero">
        <div className="hero-content">
          <h1>Our State-of-the-Art Infrastructure</h1>
          <p>Combining cutting-edge technology with sustainable operations</p>
        </div>
      </section>

      {/* Key Stats */}
      <div className="stats-bar">
        <div className="stat-item">
          <FaWarehouse className="stat-icon" />
          <h3>10+</h3>
          <p>Specialized Units</p>
        </div>
        <div className="stat-item">
          <FaCertificate className="stat-icon" />
          <h3>ISO 2000:2025</h3>
          <p>Certified Facilities</p>
        </div>
      </div>

      {/* Manufacturing Section */}
      <section className="infra-section manufacturing">
        <div className="section-image">
          <img 
            src="https://img1.wsimg.com/isteam/ip/e0023f3c-322b-445d-be0f-6b2506a110ac/blob-53c1a9d.png" 
            alt="Automated production line" 
          />
        </div>
        <div className="section-content">
          <h2><FaCogs className="section-icon" /> Manufacturing Excellence</h2>
          <p className="section-description">
            Our advanced manufacturing facilities combine automation with precision engineering 
            to deliver consistent quality across all product lines.
          </p>
          <ul className="infra-features">
            <li>Fully automated production lines</li>
            <li>GMP-certified manufacturing units</li>
            <li>Dedicated zones for different product categories</li>
            <li>Advanced process control systems</li>
            <li>24/7 monitored operations</li>
          </ul>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="infra-section quality reversed">
        <div className="section-image">
          <img 
            src="https://images.unsplash.com/photo-1581091226033-d6c7cd0fd6b2" 
            alt="Modern laboratory equipment" 
          />
        </div>
        <div className="section-content">
          <h2><FaMicroscope className="section-icon" /> Quality Control</h2>
          <p className="section-description">
            Our state-of-the-art quality control laboratories ensure every product meets 
            international standards through rigorous testing protocols.
          </p>
          <div className="qc-facilities">
            <div className="qc-item">
              <h3>Advanced Equipment</h3>
              <p>HPLC, GC-MS, and FTIR systems</p>
            </div>
            <div className="qc-item">
              <h3>12-Stage Process</h3>
              <p>Quality verification system</p>
            </div>
            <div className="qc-item">
              <h3>Certifications</h3>
              <p>ISO, GMP, and FSSAI compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="infra-section sustainability">
        <div className="section-image">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276" 
            alt="Solar power installation" 
          />
        </div>
        <div className="section-content">
          <h2><FaLeaf className="section-icon" /> Sustainable Operations</h2>
          <p className="section-description">
            Committed to eco-friendly practices, we maintain a carbon-neutral footprint 
            through innovative sustainability initiatives.
          </p>
          <div className="eco-features">
            <div className="eco-item">
              <h3>Zero Waste</h3>
              <p>98% recycling efficiency</p>
            </div>
            <div className="eco-item">
              <h3>Solar Power</h3>
              <p>2MW renewable energy</p>
            </div>
            <div className="eco-item">
              <h3>Water Management</h3>
              <p>Closed-loop systems</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};