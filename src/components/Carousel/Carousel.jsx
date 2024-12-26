import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/banner/banner-a.svg";
import Banner2 from "../../assets/banner/banner-c.svg";
import Banner3 from "../../assets/banner/banner-f.svg";

const Carousel = () => {
  const carouselItems = [
    {
      image: Banner1,
      link: "/example.com/1",
    },
    {
      image: Banner2,
      link: "/example.com/2",
    },
    {
      image: Banner3,
      link: "/example.com/3",
    },
  ];

  const settings = {
    dots: false, // Disable navigation dots
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Link to={`${item.link}`} key={index}>
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
