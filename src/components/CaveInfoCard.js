function CaveInfoCard(props) {
    return (
        <div className='flip-card-container'>
            <div className="flip-card col">
                <div className="flip-card-inner">

                    <div className="flip-card-front">
                        <img src={props.cardImage} alt="Cave Formation" />
                    </div>

                    <div className="flip-card-back">
                        <h1>{props.cardName}</h1>
                        <p>{props.cardDescription}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CaveInfoCard