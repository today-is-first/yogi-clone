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
  };
  const next = () => {
    return sliderRef.current.slickNext();
  };

  const previous = () => {
    return sliderRef.current.slickPrev();
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className="card-slider">
        {children}
      </Slider>
      <div className="btn-wrapper">
        <button onClick={previous} className="prev-btn">
          <img src={prevIcon} />
        </button>
        <button onClick={next} className="next-btn">
          <img src={nextIcon} />
        </button>
      </div>
    </>
  );
};

export default MainEventCardSlider;
