

const Card = ({ 
    backgroundImage, 
    price, 
    location, 
    bedCount, 
    areaValue, 
    additionalInfo, 
    tagText 
}) => {
    return (
        <div className="card">
            <div className="image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            
            <div className="frame-43">
                <div className="frame-56">
                    <div className="price">{price}</div>
                    <div className="location-details">
                        <div className="location-icon"></div>
                        <div className="location-text">{location}</div>
                    </div>
                    <div className="details-frame">
                        <div className="bed-info">
                            <div className="bed-icon"></div>
                            <div className="bed-count">{bedCount}</div>
                        </div>
                        <div className="area-info">
                            <div className="area-icon"></div>
                            <div className="area-value">{areaValue.value}</div>
                            <div className="area-subvalue">{areaValue.subvalue}</div>
                        </div>
                        <div className="additional-info">
                            <div className="additional-icon"></div>
                            <div className="additional-value">{additionalInfo}</div>
                        </div>
                    </div>
                </div>
                <div className="tag">
                    <div className="tag-text">{tagText}</div>
                </div>
            </div>
        </div>
    );
};



export default Card;
