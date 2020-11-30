
function GiftShopCard(props) {
    return (
        <div className="card">
            <img src={props.imageSrc} className="card-img-top" alt={props.imageAlt}/>
                <div className="card-body">
                    <p className="card-text">{props.itemName}</p>
                </div>
        </div>
    );
}

export default GiftShopCard;