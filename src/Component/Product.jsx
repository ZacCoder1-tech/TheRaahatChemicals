import { FaLeaf, FaFlask, FaOilCan } from 'react-icons/fa';
import './Product.css';

export const Product = () => {
  return (
    <>
   
    <div className="products-overview">
    <section className="infra-hero">
        <div className="hero-content">
          <h1>Our Products</h1>
          <p>Natural and Good Quality Products</p>
        </div>
      </section>
      {/* Hero Section */}
      <section className="hero">
        <h1>Our Natural Product Range</h1>
        <p>Premium quality natural solutions for diverse industrial applications</p>
      </section>

      {/* Product Categories */}
      <div className="product-grid">

        {/* Natural Mint Products */}
        <section className="product-card">
          <div className="product-image">
            <img src='https://5.imimg.com/data5/SELLER/Default/2023/6/315079220/CQ/HD/NJ/714555/natural-menthol-crystals-500x500.jpg' 
                 alt='Natural Menthol Crystals' />
          </div>
          <div className="product-content">
            <div className="product-icon">
              <FaLeaf className="icon" />
            </div>
            <h2>Natural Mint Products</h2>
            <p className="highlight">
              Derived from pure mint varieties, our natural mint products offer 
              refreshing solutions for various applications.
            </p>
            <div className="key-features">
              <h3>Key Features:</h3>
              <ul>
                <li>100% Natural Menthol Crystals</li>
                <li>Mint Oils (Peppermint & Spearmint)</li>
                <li>Customized Blending Options</li>
                <li>Pharma-grade Quality</li>
              </ul>
            </div>
            <p className="applications">
              Applications: Pharmaceuticals, Cosmetics, Food & Beverage, 
              Aromatherapy, Personal Care Products
            </p>
          </div>
        </section>

        {/* Aroma Chemicals */}
        <section className="product-card">
          <div className="product-image">
            <img src='https://www.marketresearchintellect.com/images/blogs/natural-aroma-chemicals-market-trends-growth-and-future-prospects.webp' 
                 alt='Aroma Chemicals Production' />
          </div>
          <div className="product-content">
            <div className="product-icon">
              <FaFlask className="icon" />
            </div>
            <h2>Aroma Chemicals</h2>
            <p className="highlight">
              Premium synthetic aroma compounds for creating complex fragrances 
              and enhancing product formulations.
            </p>
            <div className="key-features">
              <h3>Key Benefits:</h3>
              <ul>
                <li>High Purity Levels (&gt;99%)</li>
                <li>Custom Concentration Options</li>
                <li>ISO Certified Production</li>
                <li>Global Compliance Standards</li>
              </ul>
            </div>
            <p className="applications">
              Applications: Perfumery, Home Care Products, Industrial Deodorizers, 
              Cosmetic Formulations
            </p>
          </div>
        </section>

        {/* Natural Essential Oils */}
        <section className="product-card">
          <div className="product-image">
            <img src='https://www.happi.com/wp-content/uploads/2024/04/186_main-15.jpg' 
                 alt='Essential Oils Extraction' />
          </div>
          <div className="product-content">
            <div className="product-icon">
              <FaOilCan className="icon" />
            </div>
            <h2>Natural Essential Oils</h2>
            <p className="highlight">
              Pure plant-derived essential oils extracted using sustainable 
              steam distillation methods.
            </p>
            <div className="key-features">
              <h3>Our Range Includes:</h3>
              <ul>
                <li>Citrus Oils (Lemon, Orange)</li>
                <li>Floral Oils (Lavender, Rose)</li>
                <li>Herbal Oils (Eucalyptus, Tea Tree)</li>
                <li>Spice Oils (Clove, Cinnamon)</li>
              </ul>
            </div>
            <p className="applications">
              Applications: Aromatherapy, Natural Cosmetics, Holistic Medicine, 
              Spa Products
            </p>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Interested in Our Natural Solutions?</h2>
        <p>Get expert consultation for your specific requirements</p>
        <div className="cta-buttons">
          <button className="cta-button">Request Product Catalog</button>
          <button className="cta-button secondary">Contact Sales Team</button>
        </div>
      </section>
    </div>
    </>
  );
};
 