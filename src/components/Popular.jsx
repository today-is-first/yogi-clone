import PopularCard from "./PopularCard";

const Popular = ({ popularList }) => {
  console.log(popularList);
  return (
    <div className="trip-card">
      <div className="title">
        <h2>인기 추천 숙소</h2>
      </div>
      <div className="category">
        <ul>
          <li>전체</li>
          <li>모텔</li>
          <li>호텔 리조트</li>
          <li>펜션 풀빌라</li>
          <li>프리미엄 블랙</li>
          <li>캠핑 글램핑</li>
          <li>홈 빌라</li>
          <li>게하 한옥</li>
        </ul>
      </div>
      <div className="popularCard-list">
        <div className="popularCard-item">
          {popularList.map((data) => (
            <PopularCard
              key={data.id}
              img={data.img}
              title={data.title}
              place={data.place}
              rating={data.rating}
              evaluation={data.evaluation}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
