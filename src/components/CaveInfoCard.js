function CaveInfoCard(props) {
    return (
            <div class="flip-card col">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={props.cardImage} alt="Cave Formation" style={{ width: 200 + 'px', height: 300 + 'px' }} />
                    </div>
                    <div class="flip-card-back">
                        <h1>{props.cardName}</h1>
                        <p>{props.cardDescription}</p>
                    </div>
                </div>
            </div>
    )
}

export default CaveInfoCard