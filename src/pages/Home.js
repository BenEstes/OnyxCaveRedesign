import ImageHelper from '../components/ImageHelper'

function Home() {
    return (
        <div>
            <div className="home-container">
                <div className='bg'></div>

                <div className="info-container">
                    <div>
                        <h1>Onyx Cave Information</h1>
                        <p>93 Huckleberry Knob Road, Cave City, Kentucky 42127 (Right off I-65, Exit 53)</p>
                        <p>Call for more information <span>(270) 773-2323</span></p>
                    </div>

                    <div>
                        <h1>Inside Onyx Cave</h1>
                        <p>Onyx Cave offers its viewers beautiful cave coral, a wall of cave bacon, and a 40' tall column.</p>
                        <p>The cave is roughly 60 degrees year round. Tours are 30 minutes long and can be enjoyed by people of all ages.</p>
                        
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Home