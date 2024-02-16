

const WeekCard = () => {  


  return (
    <div className="weekcard">
      <h2>이번 주 블랙 PICK</h2>
      <p>나를 위한 근사한 휴가, 여기어때 프리미엄 숙소</p>
      <section className="weekcard_section">
        <div className="weekcard_section_img">
          <img className="weekcard_img" src="/asset/weekcard1.webp"/>
          <img className="weekcard_img" src="/asset/weekcard2.webp"/>
          <img className="weekcard_img" src="/asset/weekcard3.webp"/>
          <img className="weekcard_img" src="/asset/weekcard4.webp"/>
          <img className="weekcard_img" src="/asset/weekcard5.webp"/>
        </div>
      </section>
    </div>
  )
}

export default WeekCard;