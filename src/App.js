import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import About from './components/about';
import Contact from './components/contact';
import Work from './components/workhistory';
import { Switch,Route } from 'react-router-dom';
import Resume from './components/resume';
import Home from './components/home';
import {NavLink} from 'react-router-dom';
import 'react-mdl/extra/material.css';


class App extends Component {
  constructor(props){
	  super(props);
		this.state = {resumeData :[]}
  }
	componentDidMount(){
	//	const url = "/data.json";
  const url = "https://raw.githubusercontent.com/RiyaReddy/json/master/data.json";
		fetch(url)
		.then(response => response.json())
		.then((data)=>{
			this.setState({
				resumeData:data
			});
		})
	}
  //Function to close side nav on click of a link
  hideToggle() {
      var selectorId = document.querySelector('.mdl-layout');
      selectorId.MaterialLayout.toggleDrawer();
  }
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
        <Header className="home" title={<NavLink style={{textDecoration: 'none', color: 'white'}} to="/">Riya Reddy</NavLink>} scroll>
            <Navigation>
                <NavLink activeStyle={{color:'blue'}} style={{fontSize:'20px'}} to="/about">About</NavLink>
                <NavLink activeStyle={{color:'blue'}} style={{fontSize:'20px'}} to="/resume">Resume</NavLink>
                <NavLink activeStyle={{color:'blue'}} style={{fontSize:'20px'}} to="/workhistory">Work</NavLink>
                <NavLink activeStyle={{color:'blue'}} style={{fontSize:'20px'}} to="/contact">Contact</NavLink>
            </Navigation>
        </Header>
        <Drawer title={<NavLink onClick={() => this.hideToggle()} style={{textDecoration: 'none', color: 'black'}} to="/">Riya Reddy</NavLink>}>
            <Navigation>
            <NavLink onClick={() => this.hideToggle()} activeStyle={{color:'blue'}} style={{fontSize:'20px'}}  to="/about">About</NavLink>
            <NavLink onClick={() => this.hideToggle()} activeStyle={{color:'blue'}} style={{fontSize:'20px'}} to="/resume">Resume</NavLink>
            <NavLink onClick={() => this.hideToggle()} activeStyle={{color:'blue'}} style={{fontSize:'20px'}} to="/workhistory">Work</NavLink>
            <NavLink onClick={() => this.hideToggle()} activeStyle={{color:'blue'}} style={{fontSize:'20px'}} to="/contact">Contact</NavLink>
            </Navigation>
        </Drawer>
        <Content>
          <Switch>
          <Route exact path="/" render={
            () => {
              return ( <Home data = {this.state.resumeData.main} />);
            }
          }/>
          <Route path="/about" render={
            () => {
              return ( <About data = {this.state.resumeData.main} />);
            }
          }/>
          <Route path="/resume" render={
            () => {
              return ( <Resume data = {this.state.resumeData.resume} />);
            }
          }/>
          <Route path="/workhistory" component={Work}/>
          <Route path="/contact" render={
            () => {
              return ( <Contact data = {this.state.resumeData.main} />);
            }
          }/>
          </Switch>
        </Content>
        </Layout>
        </div>
    );
  }
}

export default App;
