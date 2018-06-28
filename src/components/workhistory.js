import React, { Component } from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,CardMenu,Button} from 'react-mdl';

class Work extends Component{
  render(){
    return(
      <div>
      <Grid>
      <Cell col={6}>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
       <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>MVP Studio(AU) &emsp;&emsp;&nbsp; Full Stack Developer</CardTitle>
       <CardText>
        I am currently working as a full-stack web developer for the Keys project <a href="http://property.community/" target="_blank" rel="noopener noreferrer">(property.community)</a>
        a cloud-based property management platform.
        This innovative web app serves the need of property owners, tenants,service providers and investors.<br/>
        <p>Technologies:C#,MVC,LINQ,HTML5,Bpptstrap,jQuery,Knockout.JS,Microsoft SQL Server.</p>
        <ul>
          <li>Implemented new workflow where the property owner recieves an email notification from a tenant when submitting a new application request using Sendgrid API.</li>
          <li>Implemented multiple front-end validation checks using JavaScript framework(Knockout.Js).</li>
          <li>Defect root cause analysis and issue remediation across the application.</li>
          <li>Participation in daily Scrum 'stand-ups' and sprint demos,providing updates on development tasks.</li>
          <li>Collaboration with the other team members,both in-person and via Slack channes and Zoom meetings.</li>
          <li>Performed source code management using TFS.</li>
          <li>Tools: Microsoft Visual Studio,TFS.</li>
        </ul>
       </CardText>
      <CardActions border>
        <Button colored href="http://www.mvp.studio/" target="_blank">View MVP</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
       <p>Sept 2017 - Present</p>
      </CardMenu>
      </Card>
      </Cell>
      <Cell col={6}>
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Ciber India(IN) &emsp;&emsp;&nbsp; SAP ABAP Developer</CardTitle>
          <CardText>
            I was working as a SAP Developer to customize SAP software as per clients buisness requirement using ABAP(Advanced Buisness Application Programming)
          <ul>
            <li>Contributed to requirements gathering,estimation,customer interaction,development and enhancement,bug fixing and unit testing.</li>
            <li>Performed key 'point-of-contact' role between onshore and offshore teams and Buisness Analysts by being part of daily Stand-up meetings and provising task updates.</li>
            <li>Contributed to multiple end-to-end project implementations,project roll-outs and deployments throughout the entire SDLC for large international clients.</li>
          </ul>
          <p style={{fontWeight:'bold'}}>Achievements</p>
          <p>I rapidly solved a long-standing technical issue within a Cibersites Philips project,saving considerable additional development time that had been budgeted and allocated.This achievement recieved recognition from the client and commendation within our internal management team.</p>
          </CardText>
        <CardActions border>
        <Button colored href="https://www.ciber.com/" target="_blank">View Ciber</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
      <p>Sept 2011 - Mar 2017</p>
    </CardMenu>

    </Card>
      </Cell>
      </Grid>
      </div>
    )
  }
}
export default Work;
