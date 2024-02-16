import './App.css';
import Header from './components/Header';
import TripCard from './components/TripCard';
import WeekCard from './components/WeekCard';

import {
  DomesticTripCardList,
  OverseasTripCardList,
} from './data/Trip-card-data';

function App() {
  return (
    <div className="App">
      <Header />
      <TripCard
        title={'국내 인기 여행지'}
        tripCardList={DomesticTripCardList}
      />
      <TripCard
        title={'해외 인기 여행지'}
        tripCardList={OverseasTripCardList}
      />
      <WeekCard />
    </div>
  );
}

export default App;
