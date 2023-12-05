import './MoodBoard.css';
import mood from '../../Assets/images/moodweb.png';
import board from '../../Assets/images/moodboard.png';

const MoodBoard = () => {
  return (
    <div className='moodboard'>
    <div className='mood-title'>
    <h1>Moodboard</h1>
    </div>

    <div className='mood-image'>
    <img src={mood} alt=''/>
    </div>

    <div className='board-image'>
    <img src={board} alt=''/>
    </div>
      
    </div>
  )
}

export default MoodBoard
