import { useState, useRef, useEffect } from 'react'
import { pic3, pic4 } from "../assests/Photos/photos";
import { crown } from '../assests/Icons/icons'
import styles from './Home.style.css'
import moment from 'moment'
import confetti from 'canvas-confetti'
import Slideshow from './Slider';
import CountDown from './CountDown.component';

function Home() {

  const firework = async () => {
    var myCanvas = document.createElement('canvas');
    myCanvas.style.position = "fixed"
    myCanvas.style.top = 0
    myCanvas.style.left = 0
    myCanvas.style.height = '100vh'
    myCanvas.style.width = '100%'
    document.getElementById('root').appendChild(myCanvas);

    var myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 300,
      spread: 160,
    }).then(() => {
      document.getElementsByTagName('canvas')[0].remove()
    });
  }

  useEffect(() => {
    firework()
    let count = 0
    let loop = setInterval(() => {
      count++
      firework()
      if (count === 2) {
        window.clearInterval(loop)

      }
    }, 4000)

  }, []);
  return (
    <div className="Home">
      <div className="session-one">
        <div className="session-one__container">
          <div className="session-one__text1">
            <div className='session-one__text1__item'>
              KAI TRẦN
              <img className='session-one__text1__item__icon1' src={crown} alt="crown" />
            </div>
            <p>&</p>
            <div className='session-one__text1__item'>
              RIN RIN
              <img className='session-one__text1__item__icon2' src={crown}
                alt="crown" />
            </div>
          </div>
          <div className="session-one__text2">
            Hôm nay trên đường đi chơi thì bị lủng bánh xe,
            <br />
            Nhìn lại thì thấy đinh bị rải đầy đường,
            <br />
            Nên chúng mình quyết định sẽ “QUÉT ĐINH”
          </div>

        </div>
      </div>

      <CountDown></CountDown>

      <div className="session-four">
        <div className='session-four__container'>
          <img className="session-four__picture session-four__picture__background"
            src="https://drive.google.com/uc?export=view&id=1b2Qcu2AIzYCH8-an0xnucw6AFjB5igC3" alt="" />
          <img className="session-four__picture session-four__picture__right"
            src="https://drive.google.com/uc?export=view&id=1EJvgXk-VQNrAxaMlw1_jSBmdTtgakwMG" alt="" />
          <img className="session-four__picture session-four__picture__left"
            src="https://drive.google.com/uc?export=view&id=1zoDyarm1mKwSkk7evuG-lFSqE9VP1mS4" alt="" />
        </div>
      </div>

      <div className='session-five'>
        <div className='session-five__container'>
          <Slideshow></Slideshow>

        </div>
      </div>
    </div>
  );
}

export default Home;
