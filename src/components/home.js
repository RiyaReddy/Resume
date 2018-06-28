import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import  Profile from './Profile.jpg';

class Home extends Component{
  render(){
    if(this.props.data){
         var emailref = this.props.data.social[0].url;
         var lnref = this.props.data.social[1].url;
         var gitref = this.props.data.social[2].url;
         var emailclass = this.props.data.social[0].className;
         var occupation = this.props.data.occupation;
         var lnclass = this.props.data.social[1].className;
         var gitclass = this.props.data.social[2].className;;
   }
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Profile} alt="avatar" style={{height: '250px',borderRadius: '50%'}}/>
            <div className="banner-text">
              <h1>{occupation}</h1>
            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS</p>

             <div className="social-links">

             {/* Mail */}
             <a href={emailref} rel="noopener noreferrer">
             <i className={emailclass} aria-hidden="true" />
             </a>

             {/* LinkedIn */}
             <a href={lnref} rel="noopener noreferrer" target="_blank">
             <i className={lnclass} aria-hidden="true" />
             </a>

             {/* Github */}
             <a href={gitref} rel="noopener noreferrer" target="_blank">
             <i className={gitclass} aria-hidden="true" />
             </a>

                </div>
             </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Home;
