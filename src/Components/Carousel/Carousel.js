import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

export const CarouselLeft = (props) => {
    const [auto, autoplay] = useState(true)
    return (
        <Carousel autoPlay={auto}>
            <div className="_carImg">
                <img src={require('../../assests/1.svg')} />
                <p className="legend">Study</p>
            </div>
            <div>
                <img src={require('../../assests/2.svg')} />
                <p className="legend">CodeMAn</p>
            </div>
            <div>
                <img src={require('../../assests/3.svg')} />
                <p className="legend">CodeSAGA</p>
            </div>
        </Carousel>
    )

}



export const CarouselRight = (props) => {
    const [auto, autoplay] = useState(true)
    return (

        <Carousel autoPlay={auto}>
            <div className="car" >
                FINAL TOUCH WITH COMPANY SPECIFIC MOCK TESTS
                                        </div>
            <div className="car">
                HE PERFECT PLAYGROUND TO PRACTICE YOUR CODING INTERVIEW QUESTIONS.
        </div >
            <div className="car">
                250 HANDPICKED QUESTIONS FOR CODING INTERVIEWS IN LEADING COMPANIES
        </div>
        </Carousel>
    )

}



// export default{CarouselLeft, CarouselRight};