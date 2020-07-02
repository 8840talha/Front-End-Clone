import React from 'react'
import './Logo.css'
/**
* @author
* @function 
**/

const Logo = (props) => {
    return (
        <div className="logoMain" >       
             <div className="logo_">
            <div className="text_">
                <div className="text_1">Placement</div>
                <div className="text_2">Saga</div>
            </div>
            <div className="brackets">
                [
                    <div className="bars">
                    <div className="b_1 bar"></div>
                    <div className="b_2 bar"></div>
                    <div className="b_3 bar"></div>
                    <div className="b_4 bar"></div>

                </div>
                  ]
             </div>

        </div>
        </div>

    )

}

export default Logo;