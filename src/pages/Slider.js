
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: "https://drive.google.com/uc?export=view&id=1FroN8bvYxgEju-O6zm1KrL9c6T38IIFa"
    },
    {
        url: "https://drive.google.com/uc?export=view&id=1Vw9p9JN-D78sIh45I6JG32Iu_EUOzUoG"
    },
    {
        url: "https://drive.google.com/uc?export=view&id=11GodKJ1X1AuqZKRu-SG-CTBP3b4hsLAc"
    },
    {
        url: "https://drive.google.com/uc?export=view&id=1UPB7hiydhI2gY1lCm3eorO7tdssZcMe8"
    },
    {
        url: "https://drive.google.com/uc?export=view&id=1tXE4RSy9mcTJiVUvds2eZG1M3AeDwxCn"
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
    duration: 3000,
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
                                backgroundPosition: `${index === 3 ? '50% 75%':  '65% 75%'  }`,
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