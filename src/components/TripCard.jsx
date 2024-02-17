import Card from "./Card";

const TripCard = ({ title, tripCardList }) => {
  return (
    <section className="trip-card">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="card-wrapper">
        {tripCardList.map((it) => {
          return <Card key={it.id} img={it.img} name={it.name} />;
        })}
      </div>
    </section>
  );
};

export default TripCard;
