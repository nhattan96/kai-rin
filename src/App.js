import './App.css';
import Home from './pages/Home.component';
import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { bunny, sorry } from './assests/Icons/icons';
import React, { useState } from 'react';

function App() {

  const [isMobible, setIsMobile] = useState(false)

  const handleResize = () => {

    console.log(isMobible)
    if (!isMobible) {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      }
    }

  }
  const Loading = () => <div className='loading'>
    <img src={bunny} alt="bunny" />
    <div className="lds-heart"><div></div></div>
    <p>Đợi xíu nhá !</p>
    <h4>Please Wait...</h4>
  </div>

  handleResize()

  useEffect(() => {

    let count = 0
    let loop = setInterval(() => {
      count++
      if (count === 1) {
        window.clearInterval(loop)
        if (document.getElementsByClassName('loading').length > 0) {
          document.getElementsByClassName('loading')[0].remove()
          let count = 0
          let loop = setInterval(() => {
            count++
            firework()
            if (count === 1) {
              window.clearInterval(loop)
            }
          }, 4000)
        }
      }
    }, 4000)

  }, []);

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

  return (

    <div className="App">
      {
        isMobible ? <div>
          <Loading></Loading>
          <Home></Home>
        </div> : <div>
          <img src={sorry} alt="" />
          <h1 style={{
            fontFamily: "UVNAiCapNhe"
          }}>
            Please re-open on your mobile phone !
          </h1>
        </div>
      }

    </div>
  );
}

export default App;
