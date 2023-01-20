import '../../styles/App.css';
import portrait from '../../assets/cropped-self-ynp.png';
import portraitBackground from '../../assets/portrait-background.jpg';

export default function StyledPortrait() {
  return (
    <div className='styled-portrait'>
      <div className='portrait-container'>
        <img className='portrait-bg' src={portraitBackground} alt=''></img>
        <img className='portrait-img' src={portrait} alt='portrait'></img>
      </div>
    </div>
  );
}
