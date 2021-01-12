import ImageHelper from '../../components/ImageHelper'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className='bg'></div>
        <div className="info-container">
          <div className='info-inner-container'>
            <h1>Onyx Cave Information</h1>
            <img
              src={ImageHelper.BusinessPreview2}
              alt='Business front'
              className='info-image'
              height='50%'
              width='100%'
            />
            <p>93 Huckleberry Knob Road, Cave City, Kentucky 42127 (Right off I-65, Exit 53)</p>
            <p>Call for more information <span>(270) 773-2323</span></p>
          </div>

          <div className='info-inner-container'>
            <h1>Inside Onyx Cave</h1>
            <img
              src={ImageHelper.CaveTourSights5}
              alt='Cave tour preview.'
              className='info-image'
              height='50%'
              width='100%'
            />
            <p>Onyx Cave offers its viewers beautiful cave coral, a wall of cave bacon, and a 40' tall column.</p>
            <p>The cave is roughly 60 degrees year round. Tours are 30 minutes long and can be enjoyed by people of all ages.</p>
          </div>
        </div>

      </div>
    </div>

  );
}
export default Home