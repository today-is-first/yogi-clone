import MainEventCard from "../components/MainEventCard";
import MainEventList from "../data/Main-Event-data";
import MainEventCardSlider from "../components/MainEventCardSlider";
import { useRef } from "react";

const MainEvent = () => {
    const sliderRef = useRef();
    return (
        <section className = " MainEvent">
            <div className = "MainEvent-Top">
                <div className = "MainEvent-Text">
                    <h2>이벤트</h2>
                    <span>더보기</span>
                </div>
            </div>

            <div className = "MainEvent-Bottom">
                <div className = "MainEvent-carousel">
                    <div>
                    <MainEventCardSlider sliderRef={sliderRef} className = "swiperWrapper">
                    {MainEventList.map((EventData) => {
                return <MainEventCard key={EventData.id} img={EventData.img}/>;
            })}
                </MainEventCardSlider>
                    </div>
                    <div className = "MainEvent-PaginationButton"></div>
                </div>
            </div>


        </section>
    )

}

export default MainEvent;