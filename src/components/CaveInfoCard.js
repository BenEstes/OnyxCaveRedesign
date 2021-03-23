const CaveInfoCard = ({ cardImage, cardName, cardDescription }) => {
    return (
        <div className='flip-card-container'>
            <div className="flip-card col">
                <div className="flip-card-inner">

                    <div className="flip-card-front">
                        <img src={cardImage} alt="Cave Formation" />
                    </div>

                    <div className="flip-card-back">
                        <h1>{cardName}</h1>
                        <p>{cardDescription}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CaveInfoCard