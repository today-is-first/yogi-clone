const PopularCard = ({
  img,
  title,
  place,
  rating,
  evaluation,
  price,
  lodging,
}) => {
  return (
    <div className="popcard-wrapper">
      <div className="popcard-img">
        <img src={img} />
      </div>
      <div className="popcard-lodging">
        <span>{lodging}</span>
      </div>
      <div className="popcard-header">
        <h2>{title}</h2>
      </div>
      <div className="popcard-place">
        <span>{place}</span>
      </div>
      <div className="popcard-rating">
        <span>⭐{rating}</span>
        <span>{evaluation}</span>
      </div>
      <div className="popcard-price">
        <span>쿠폰 적용시</span>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default PopularCard;
