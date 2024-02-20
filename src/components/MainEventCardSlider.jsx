import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nextIcon from '../assets/icon/next.svg';
import prevIcon from '../assets/icon/prev.svg';

const MainEventCardSlider = ({ sliderRef, children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className="card-slider">
        {children}
      </Slider>
    </>
  );
};

export default MainEventCardSlider;
