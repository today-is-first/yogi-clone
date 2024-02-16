const Card = ({ id, img, name }) => {
  return (
    <div key={id} className="card">
      <img src={img} />
      <span>{name}</span>
    </div>
  );
};

export default Card;
