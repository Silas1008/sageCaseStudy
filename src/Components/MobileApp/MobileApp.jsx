import './MobileApp.css';
import imageone from '../../Assets/images/instagramfeeds.png';
import imagetwo from '../../Assets/images/instagrammockup.png';

const MobileApp = () => {
  return (
    <div className='mobile-app'>

    <div className='image-one'>
    <img src={imageone} alt=''/>
    </div>

    <div className='image-two'>
    <img src={imagetwo} alt=''/>
    </div>
      
    </div>
  )
}

export default MobileApp
