import React, { Component } from 'react';
import  Profile from './Profile.jpg';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Resume extends Component {
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function(skills){
       return <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{skills.name} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={skills.level} /> </div>
        </Cell>
      </Grid>
    });
    var education = this.props.data.education.map(function(education){
      return <Grid>
        <Cell col={4}>
          <p>{education.graduated}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{education.school}</h4>
          <h6>{education.degree}</h6>
          <h6>{education.description}</h6>
        </Cell>
      </Grid>
    });

    var experience = this.props.data.work.map(function(work){
    return <Grid>
        <Cell col={4}>
          <p>{work.years}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{work.company}</h4>
          <p>{work.description}</p>
          <p>{work.tools}</p>
        </Cell>
      </Grid>
    });
   }
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src={Profile} alt="avatar" style={{height: '250px',borderRadius: '50%'}}/>
            </div>
            <h2 style={{paddingTop: '10px'}}>Riya Reddy</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>

            <p>{skillmessage}</p>

          <p><strong>Current Focus</strong>:&nbsp;<a aria-label="Navigate to Roadmap" href="https://codingthesmartway.com/the-2018-roadmap-to-fullstack-web-development/" target="_blank" rel="noopener noreferrer">Front-End Development</a>&nbsp;&#47;&#47;&nbsp;<a aria-label="Navigate to React homepage" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
            <h5>Address</h5>
            <p>84 Vaucluse Blvd PointCook,3030</p>
            <h5>Phone</h5>
            <p>(+61) 450 572 148</p>
            <h5>Email</h5>
            <p>riya@mecoder.net</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '95%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              {education}
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
              {experience}
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              {skills}
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
