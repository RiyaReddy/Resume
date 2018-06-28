import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import  Profile from './Profile.jpg';

class Contact extends Component{
  render(){
   if(this.props.data){
    var name = this.props.data.name;
     var phone = this.props.data.phone;
     var email = this.props.data.email;
     var skype = this.props.data.skype;
     var contactmessage = this.props.data.contactmessage;
   }
    return(
      <div className="contact-body">
      <Grid className="contact-grid">

      <Cell col={6}>
       <h2>{name}</h2>
       <img src={Profile} alt="avatar" style={{height: '250px',borderRadius: '50%'}}/>
       <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
          <i>I believe in Sharing my Knowledge to achieve immortality </i></p>
      </Cell>

      <Cell col={6}>
      <h2>{contactmessage}</h2>
      <hr/>
      <div className="contact-list">
      <List>
               <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                   <i className="fa fa-phone-square" aria-hidden="true"/>
                   {phone}
                 </ListItemContent>
               </ListItem>
               <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                   <i className="fa fa-envelope" aria-hidden="true"/>
                   {email}
                 </ListItemContent>
               </ListItem>
               <ListItem>
                 <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                   <i className="fa fa-skype" aria-hidden="true"/>
                   {skype}
                 </ListItemContent>
               </ListItem>
       </List>
       </div>
      </Cell>

      </Grid>
      </div>
    )
  }
}
export default Contact;
