import img3 from './img3.jpg';
import { Helmet } from 'react-helmet-async';
import { Carousel } from './Carousel';
import './home.css';

export function Home() {
  return (
    <div>
<Helmet>
  <title>Raahat Chemicals | Premium Menthol Crystals Manufacturer</title>
  <meta name="description" content="India's leading manufacturer of pharmaceutical-grade menthol crystals and essential oils since 2000. ISO-certified, organic production."/>
  <meta name="keywords" content="menthol crystals, peppermint oil, essential oils manufacturer"/>
  <meta property="og:image" content="https://yourdomain.com/logo.png"/>
</Helmet>
      <Carousel />
      <section className="hero-section">
        <h1>Essential Oils and Natural Chemicals</h1>
        <p>We provide top-notch consulting services to help your business grow.</p>
      </section>

      <section className="products-section">
        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2024/3/401897358/JN/QA/VH/26927769/peppermint-oil-500x500.jpg" 
              alt="Peppermint Oil"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Peppermint Oil</h3>
            <p className="card-description">
              Premium quality essential oil extracted through steam distillation. 
              Perfect for aromatherapy and skincare applications.
            </p>
          </div>
        </article>

        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://www.health.com/thmb/xCAXd6FFEKV3TM9ynbyRXgwsQpE=/5472x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1144769011-28ed184dd64e4f56813b91f6c6ca5eef.jpg" 
              alt="Clove Oil"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Clove Oil</h3>
            <p className="card-description">
              High-quality essential oil with a strong, spicy aroma, ideal for dental care and relaxation.
            </p>
          </div>
        </article>

        <article className="product-card">
          <div className="card-image">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2020/8/QH/WO/HG/8932117/mentha-crystal-tl-bold.jpg" 
              alt="Menthol Crystal"
              loading="lazy"
            />
          </div>
          <div className="card-content">
            <h3>Menthol Crystal</h3>
            <p className="card-description">
            Pure menthol crystals are ideal for medicinal and cosmetic uses, and they are currently trending in the market.
            </p>
          </div>
        </article>
      </section>

      <section className="expertise-section">
        <div className="expertise-content">
          <div>
            <img 
              src="https://www.silverlinechemicals.com/images/products/mentha-piperita-oil.jpg" 
              alt="Natural Oils"
            />
          </div>
          <div>
            <h2>Our Expertise</h2>
            <p>
              We specialize in the creation and production of high-quality aromatic compounds 
              and specialty chemicals. Our state-of-the-art manufacturing facilities utilize 
              advanced techniques and industry-leading technology to provide tailored solutions 
              for various industries, including fragrance, cosmetics, food & beverage, and pharmaceuticals. 
              We ensure all our processes meet the highest environmental and safety standards 
              while delivering exceptional performance.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h3>Testimonials</h3>
        <div className="testimonial">
          <img src={img3} alt="DIRECTOR" />
          <h4>Mr. Mohd Zubair</h4>
          <p>(Director of Raahat Chemicals)</p>
          <p>
            As an experienced manufacturer in the aromatic and chemicals industry, Raahat Chemicals PVT.LTD has been 
            at the forefront of producing high-quality, custom chemicals for over 24 years. Our expertise spans across 
            the creation and formulation of a wide range of chemical compounds, essential oils, and specialty chemicals. 
            We have built a reputation for precision, innovation, and reliability, serving industries such as fragrance, 
            cosmetics, food & beverage, pharmaceuticals, and more.
          </p>
        </div>
      </section>
    </div>
  );
}
