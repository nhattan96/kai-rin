import './App.css';
import Home from './pages/Home.component';
import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { bunny } from './assests/Icons/icons';

function App() {

  const Loading = () => <div className='loading'>
    <img src={bunny} alt="bunny" />
    <div className="lds-heart"><div></div></div>
    <div>Đợi xíu nhá !</div>
  </div>

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
            if (count === 2) {
              window.clearInterval(loop)
            }
          }, 5000)
        }
      }
    }, 7000)

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
      <Loading></Loading>
      <Home></Home>
    </div>
  );
}

export default App;
