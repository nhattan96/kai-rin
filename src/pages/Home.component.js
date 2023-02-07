import { useState, useRef, useEffect } from 'react'
import { pic3, pic4 } from "../assests/Photos/photos";
import { beatingHeart, crown, crownQ, highShoe, rings, shoe } from '../assests/Icons/icons'
import styles from './Home.style.css'
import moment from 'moment'

import Slideshow from './Slider';
import CountDown from './CountDown.component';

function Home() {


  return (
    <div className="Home">
      <div className="session-one">
        <div className="session-one__container">
          <div className="session-one__text1">
            <div className='session-one__text1__item'>
              KAI TRẦN
              <img className='session-one__text1__item__icon1' src={crown}
                alt="crown" />
            </div>
            <p>&</p>
            <div className='session-one__text1__item'>
              RIN RIN
              <img className='session-one__text1__item__icon2' src={crownQ}
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

      <div className="session-two__container2">
        <div className="session-two__container2_text">
          <div className="session-two__container2_text_3">
            <img className='' src={beatingHeart}
              alt="beatingHeart" />
          </div>

          <div className="session-two__container2_text_1">
            <p>
              19
            </p>
            <p>
              03
            </p>
            <p>
              2023
            </p>
          </div>
          <div className="session-two__container2_text_2">
            <p>
              The
            </p>
            <img src={rings} alt="" />
            <p>
              day
            </p>
          </div>
        </div>

      </div>

      <div className="session-four">
        <div className='session-four__container'>
          <img className="session-four__picture session-four__picture__background"
            src="https://drive.google.com/uc?export=view&id=1b2Qcu2AIzYCH8-an0xnucw6AFjB5igC3" alt="" loading='lazy'/>
          <img className="session-four__picture session-four__picture__right"
            src="https://drive.google.com/uc?export=view&id=1EJvgXk-VQNrAxaMlw1_jSBmdTtgakwMG" alt=""  />
          <img className="session-four__picture session-four__picture__left"
            src="https://drive.google.com/uc?export=view&id=1zoDyarm1mKwSkk7evuG-lFSqE9VP1mS4" alt="" />

          <div className='session-four__container__top'>
            <p className='session-four__container__top__text1'>
              Yêu nhau mấy núi cũng trèo Mấy sông cũng lội Nhà xa cỡ nào Anh cũng tới đón em đi chơi
            </p>
            <p className='session-four__container__top__text2'>
              Princess
            </p>
            <img className='session-four__container__top__icon' src={shoe} alt="" />
          </div>
          <div className='session-four__container__bottom'>
            <p className='session-four__container__bottom__text2'>
              Princess's <br /> Boss
            </p>
            <img className='session-four__container__bottom__icon' src={highShoe} alt="" />
            <p className='session-four__container__bottom__text1'>
              Anh đã bên em lúc em tồi tệ nhất
              Thế nên Anh xứng đáng có được em lúc e rực rỡ nhất
            </p>
          </div>

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
