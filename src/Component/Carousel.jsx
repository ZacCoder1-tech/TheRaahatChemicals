import { useEffect, useState } from "react";
import "./Carousel.css";

export const Carousel = () => {
  const slides = [
    {
      image: "https://www.agrifarming.in/wp-content/uploads/2020/09/peppermint-3481470_1920.jpg",
      title: "Premium Peppermint Cultivation",
      description: "Naturally grown peppermint for superior quality extracts"
    },
    {
      image: "https://www.hairpalace.co.uk/wp-content/uploads/2021/11/essential-oils.jpg?v=1713444816",
      title: "Essential Oils Collection",
      description: "Pure plant-based essential oils for various applications"
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2023/6/315079220/CQ/HD/NJ/714555/natural-menthol-crystals-500x500.jpg",
      title: "Natural Menthol Crystals",
      description: "Pharmaceutical-grade menthol crystals for industrial use"
    },
    {
      image: "https://www.health.com/thmb/xCAXd6FFEKV3TM9ynbyRXgwsQpE=/5472x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1144769011-28ed184dd64e4f56813b91f6c6ca5eef.jpg",
      title: "Sustainable Production",
      description: "Eco-friendly manufacturing processes"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.title}
            className={i === index ? "active" : ""}
          />
        ))}
        <div className="carousel-caption">
          <h2>{slides[index].title}</h2>
          <p>{slides[index].description}</p>
        </div>
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`carousel-indicator ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};