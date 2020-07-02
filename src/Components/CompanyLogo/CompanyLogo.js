import React from 'react'
import './CompanyLogo.css'
import Grid from '@material-ui/core/Grid';
const CompanyLogo = (props) => {
    return (
        <Grid className="G_Container floating" container lg={12}>
            <Grid className="grids " item xs={6} sm={4} md={2} lg={2}><img src={require('../../assests/_amazon.png')} /></Grid>
            <Grid className="grids " item xs={6} sm={4} md={2} lg={2}><img src={require('../../assests/LinkedIn-128.png')} /></Grid>
            <Grid className="grids " item xs={6} sm={4} md={2} lg={2}><img src={require('../../assests/google-128.png')} /></Grid>
            <Grid className="grids" item xs={6} sm={4} md={2} lg={2}><img src={require('../../assests/mi.png')} /></Grid>
            <Grid className="grids " item xs={6} sm={4} md={2} lg={2}><img src={require('../../assests/paytm-128.png')} /></Grid>
            <Grid className="grids" item xs={6} sm={4} md={2} lg={2}><img src={require('../../assests/adobe-128.png')} /></Grid>

        </Grid>
    )

}

export default CompanyLogo