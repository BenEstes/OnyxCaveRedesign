import './NoMatch.css'

function NoMatch() {
    return <div>
        <div className='main-no-match'>
            <div className="no-match-container">
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <a href="/">Go Back To The Cave Entrance</a>
            </div>
        </div>
    </div>
}

export default NoMatch;