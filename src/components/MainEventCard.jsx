const MainEventCard = ({id, img}) => {
    return (
        <div key={id} className="MainEventcard">
            <img src={img}/>
        </div>
    );
};

export default MainEventCard;