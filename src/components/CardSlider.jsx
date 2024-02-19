import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nextIcon from '../assets/icon/next.svg';
import prevIcon from '../assets/icon/prev.svg';

const CardSlider = ({ sliderRef, children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
  };
  const next = () => {
    return sliderRef.current.slickNext();
  };

  const previous = () => {
    return sliderRef.current.slickPrev();
  };
  return (
    <div className="card-slider">
      <Slider ref={sliderRef} {...settings}>
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
    </div>
  );
};

export default CardSlider;
