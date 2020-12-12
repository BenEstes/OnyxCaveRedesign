
function GiftShopCard({ image, imageAlt, itemName }) {
    return (
        <div className="card giftshop-card">
            <img src={image} className="card-img-top" alt={imageAlt}/>
                <div className="card-body">
                    <p className="card-text">{itemName}</p>
                </div>
        </div>
    );
}

export default GiftShopCard;