import "./App.css";
import Header from "./components/Header";
import MainEvent from "./components/MainEvent";
import TripCard from "./components/TripCard";
import WeekCard from "./components/WeekCard";

import {
  DomesticTripCardList,
  OverseasTripCardList,
} from "./data/Trip-card-data";
import Popular from "./components/Popular";
import { PopularList } from "./data/Popular-card-data";

function App() {
  return (
    <div className="App">
      <Header />
      <MainEvent />
      <TripCard
        title={"국내 인기 여행지"}
        tripCardList={DomesticTripCardList}
      />
      <TripCard
        title={"해외 인기 여행지"}
        tripCardList={OverseasTripCardList}
      />
      <Popular popularList={PopularList} />
      <WeekCard />
    </div>
  );
}

export default App;
