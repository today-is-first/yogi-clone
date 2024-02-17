import Card from './Card';

import { useRef } from 'react';
import CardSlider from './CardSlider';

const TripCard = ({ title, tripCardList }) => {
  const sliderRef = useRef();

  return (
    <div>
      <section className="trip-card">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div>
          <CardSlider sliderRef={sliderRef} className="card-wrapper">
            {tripCardList.map((it) => {
              return <Card key={it.id} img={it.img} name={it.name} />;
            })}
          </CardSlider>
        </div>
      </section>
    </div>
  );
};

export default TripCard;
