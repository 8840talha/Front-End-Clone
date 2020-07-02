import React, { useState } from 'react'
import './Main.css';
import Grid from '@material-ui/core/Grid';
import { CarouselLeft, CarouselRight } from '../../Carousel/Carousel'
const Main = (props) => {
    
    return (
        // <div className="main_Container ">
        <Grid className="main" container lg={12}>
            <Grid className="contain-left_" container xs={12} sm={6} md={6} lg={6}>
                <div className="contain-text_" >
                    <div className="_d1">Master Your</div>
                    <div className="_d1">Destiny With</div>
                    <div className="_d2">PlacementSaga</div>
                    <button className="_mainbuton">View Sample Questions</button>
                </div>
            </Grid>
            <Grid className="contain_Right_" container xs={12} sm={6} md={6} lg={6}>
                <div className="_hold_Flex_row">
                    <div className="point1">
                        <div className="roundcorners">
                            <CarouselLeft />
                        </div>
                        <div className="round"></div>
                    </div>

                    <div className="point2">
                        <div className="roundcorners1">
                            <CarouselRight />
                        </div>
                        <div className="round1"></div>
                    </div>
                </div>
            </Grid >
        </Grid >
    )

}

export default Main;