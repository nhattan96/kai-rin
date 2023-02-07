import { useEffect, useState } from "react";

const CountDown = () => {

    const [countDown, setCountDown] = useState({
        days: '0',
        hours: '00',
        minutes: '00',
        seconds: '00',
    })

    const getCountDown = () => {
        let weddingDay = new Date("Mar 19, 2023 11:00:00").getTime()

        let now = new Date().getTime();

        let distance = weddingDay - now

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countDown = {
            days: days < 10 ? '0' + String(days) : days,
            hours: hours < 10 ? '0' + String(hours) : hours,
            minutes: minutes < 10 ? '0' + String(minutes) : minutes,
            seconds: seconds < 10 ? '0' + String(seconds) : seconds
        }

        setCountDown(prev => countDown)
    }

    useEffect(() => {
        setInterval(() => {
            getCountDown()
        }, 1000);
    }, []);

    return (
        <div className="session-two">
            <div className="session-two__container1">
                <div className="session-two__text1">
                    <div className="session-two__text1__heading">
                        WEDDING COUNTDOWN
                    </div>
                    <div className="session-two__text1__countdown">
                        <div className='session-two__text1__countdown__item'>
                            {countDown.days}
                            <p className='session-two__text1__countdown__item__label'>NGÀY</p>
                        </div>:
                        <div className='session-two__text1__countdown__item'>
                            {countDown.hours}
                            <p className='session-two__text1__countdown__item__label'>GIỜ</p>
                        </div>:
                        <div className='session-two__text1__countdown__item'>{countDown.minutes}
                            <p className='session-two__text1__countdown__item__label'>PHÚT</p>
                        </div>:
                        <div className='session-two__text1__countdown__item'>{countDown.seconds}
                            <p className='session-two__text1__countdown__item__label'>GIÂY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountDown