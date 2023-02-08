
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { p113, p46, p70, p85, p9 } from '../assests/Photos/photos';

const slideImages = [
    {
        url: p9
    },
    {
        url: p46

    },
    {
        url: p70
    },
    {
        url: p85
    },
    {
        url: p113
    },
];

const buttonStyle = {
    width: "70px",
    height: "70px",
    background: 'none',
    border: '0px'
};

const svgStyle = {
    width: "70px",
    height: "70px",
    color: 'white'
}

const propertives = {
    prevArrow: <button style={{ ...buttonStyle }}><svg style={{ ...svgStyle }} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 20c-.802 0-1.555-.312-2.122-.879l-7.121-7.121 7.122-7.121c1.133-1.133 3.11-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-2.878 2.878 2.878 2.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-6.415-8l5.708 5.707c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-4.292-4.293 4.292-4.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-5.708 5.708z"></path></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg style={{ ...svgStyle }} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20c-.802 0-1.555-.312-2.122-.879-.566-.566-.878-1.32-.878-2.121s.312-1.555.879-2.122l2.878-2.878-2.878-2.879c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.132 3.109-1.133 4.243.001l7.121 7.121-7.122 7.121c-.566.567-1.319.879-2.121.879zm0-14c-.268 0-.518.104-.707.292-.189.19-.293.441-.293.708s.104.518.293.707l4.292 4.293-4.292 4.293c-.189.189-.293.439-.293.707s.104.518.293.707c.378.379 1.037.378 1.414.001l5.708-5.708-5.708-5.707c-.189-.189-.439-.293-.707-.293z"></path></svg></button>,
    duration: 2000,
    transitionDuration: 1000,
    easing: 'ease-out'
}

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...propertives}>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div
                            style={{
                                'backgroundImage': `url(${slideImage.url})`,
                                'backgroundSize': 'cover',
                                backgroundPosition: `${index === 0 ? '50% 75%':  '65% 75%'  }`,
                                backgroundRepeat: 'no-repeat',
                                height: '100vh'
                            }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow