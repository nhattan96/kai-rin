import { pic1, pic2, pic3 } from "../assests/Photos/photos";
import styles from './Home.style.css'

function Home() {
  return (
    <div className="Home">
      <div className="session-one d-flex flex-column">
        <div className="session-one__container">
          <div className="session-one__text1">
            BRIAN NGUYỄN
            <br />
            &
            <br />
            ALEX  NGÔ
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
      <div className="session-two">
        <div className="session-two__container">
          <div className="session-two__text1">
            <div className="session-two__text1__heading">
              WEDDING COUNTDOWN
            </div>
            <div className="session-two__text1__countdonw">
              05:120:45:00
            </div>
            <div className="session-two__text1__date">
              NGÀY
              GIỜ
              PHÚT
              GIÂY
            </div>
          </div>
        </div>

      </div>
      <div className="session-three">
        <div className="session-three__container">
        </div>

      </div>
      <div className="session-four">
        <div className="session-four__container"></div>
        <img className="session-four__picture" src={pic3} alt="" />

      </div>
    </div>
  );
}

export default Home;
