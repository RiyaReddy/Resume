import React, { Component } from 'react';
import ReactRevealText from 'react-reveal-text';

class About extends Component{
  constructor() {
    super();
    this.state = { show: false };
  }
  componentDidMount() {
    //Set timeout function to show revealtext
    setTimeout(() => {
      this.setState({ show: true });
    }, 300);
  }
  render(){
    if(this.props.data){
      var resumeDownload = this.props.data.resumedownload;
      var name = this.props.data.aboutname;
      var currentfocus = this.props.data.aboutfocus;
      var interest = this.props.data.aboutinterest;
    }
    return(
      <div className="about">
        <div style={{align:'center',padding:'80px'}}>
        <p style={{textAlign:'left',lineHeight: '36px'}}>{name}</p>

        <ReactRevealText show={this.state.show} style={{color: "Pink", fontSize: "24px", lineHeight: "36px"}}>
         I have over 6 years of experience as a software engineer,and have worked at both small startups and large organisation.While I'm a proficient full-stack developer,I love building sites,apps and software all the way from the prototype and planning to the fully live product which can help client's to achieve their buisness outcomes.
        </ReactRevealText>

        <p style={{textAlign:'left',lineHeight: '36px'}}>{currentfocus}</p>

        <ReactRevealText show={this.state.show} style={{color: "Pink", fontSize: "24px", lineHeight: "36px"}}>
         I&apos;m currently working as Full Stack Developer and is always interested in challenge as I love being curious.
        </ReactRevealText>

        <p style={{textAlign:'left',lineHeight: '36px'}}>{interest}</p>

        <p><a href={resumeDownload} target="_blank">Peep Resume</a></p>
        </div>
      </div>
    )
  }
}

export default About;
