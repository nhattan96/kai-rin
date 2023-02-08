import { useState, useRef, useEffect } from 'react'
import { p104, p109, p117, p14, p20, p30, p36, p39, p6, p60, p61, p62, p63, p67, p72, pic3, pic4 } from "../assests/Photos/photos";
import { beatingHeart, cheer, crown, crownQ, highShoe, place, restaurent, rings, shoe } from '../assests/Icons/icons'
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

      <div className='session-6'>
        <div className='session-6__container'>
          <img className='session-6__container--img' src={p67} alt="" />

          <div>
            <p className='session-6__container--tittle'>
              WEDDING PLACE
            </p>

            <div className="row p-1 mb-4 justify-content-center" style={{
              marginLeft: '7px ',
              marginRight: '7px'
            }}>
              <div className="col-3" style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}>
                <img src={restaurent} alt="icon" />
              </div>
              <div className="col-9 session-6__container--subtitle session-6__container--subtitle-1 ">
                CENTURY GIA LAI
              </div>
            </div>

            <div className="row p-1 mb-4 justify-content-center" style={{
              marginLeft: '7px ',
              marginRight: '7px '
            }}>
              <div className="col-3" style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}>
                <img src={place} alt="icon" />
              </div>
              <div className="col-9 session-6__container--subtitle session-6__container--subtitle-2">
                170 Đường Wừu, P. Hội Thương, Thành phố Pleiku, Gia Lai
              </div>
            </div>
          </div>
          <p className='session-6__container--end mb-4'>
            OK <br /> Gét Gô
          </p>
          <div>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.0700974014501!2d108.00261027372075!3d13.974717643963391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1f819a3d8d6d%3A0x92eae9df6da39550!2sCentury%20Restaurant!5e0!3m2!1svi!2s!4v1675827785361!5m2!1svi!2s"
              style={{
                border: 0, width: '100%',
                height: '400px'
              }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>



        </div>
      </div>

      <div className="session-four">
        <div className='session-four__container'>
          <img className="session-four__picture session-four__picture__background"
            src={p72} alt="" />
          <img className="session-four__picture session-four__picture__right"
            src={p109} alt="" />
          <img className="session-four__picture session-four__picture__left"
            src={p104} alt="" />

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

      <div>
        <img className='w-100' src={p6} alt="" />
        <img className='w-100' src={p14} alt="" />
        <img className='w-100' src={p20} alt="" />
        <img className='w-100' src={p30} alt="" />
        <img className='w-100' src={p36} alt="" />
        <img className='w-50' src={p117} alt="" />
        <img className='w-50' src={p39} alt="" />
        <img className='w-100' src={p60} alt="" />
        <div className='d-flex '>
          <div className='w-50' style={{
            'backgroundImage': `url("${p61}")`,
            'backgroundSize': 'cover',
            backgroundPosition: '76% 75%',
            height: '350px'
          }} >
          </div>
          <div className='w-50' style={{
            'backgroundImage': `url("${p62}")`,
            'backgroundSize': 'cover',
            backgroundPosition: '76% 75%',
            height: '350px'
          }}>
          </div>
        </div>
      </div>

      <div style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white'

      }}>
        <div
          style={{
            'backgroundImage': `url("${p63}")`,
            'backgroundSize': 'cover',
            backgroundPosition: '76% 75%',
            height: '100vh',
            width: '100%',
            zIndex: -1
          }}>
        </div>
        <p style={{
          position: 'absolute',
          fontFamily: "Vanilla",
          fontSize: '80px',
          top: '270px',
          background: 'linear-gradient(to right, #2196f3, #f44336)',
          'WebkitBackgroundClip': 'text',
          'WebkitTextFillColor': 'transparent'
        }}>Thank You</p>
        <p
          style={{
            position: 'absolute',
            fontFamily: "UVNAiCapNhe",
            fontSize: '25px',
            top: '380px',
            background: 'linear-gradient(to right, #eecda3, #ef629f)',
            'WebkitBackgroundClip': 'text',
            'WebkitTextFillColor': 'transparent'
          }} >for celebrating with us</p>
        <img style={{
          position: 'absolute',
          top: '440px',
        }} src={cheer} alt="" />
      </div>
    </div >
  );
}

export default Home;
