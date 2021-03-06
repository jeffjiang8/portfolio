import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  
  
  render(){
    console.log(this.props)
    return (
      <nav>
      <NavLink strict exact to='/' key='/' onClick={this.props.handleHomeClick}>Home</NavLink>
      <NavLink strict exact to='/education' key='/education' onClick={this.props.handleEducationClick}>Education</NavLink>
      <NavLink strict exact to='/skills' key='/skills' onClick={this.props.handleSkillsClick}>Skills</NavLink>
      <NavLink strict exact to='/projects' key='/projects' onClick={this.props.handleProjectsClick}>Projects</NavLink>
      <NavLink strict exact to='/leadershipandvolunteer' key='/leadershipandvolunteer' onClick={this.props.handleLeaderClick}>Leadership/Volunteer</NavLink>
      <NavLink strict exact to='/about' key='/about' onClick={this.props.handleContactClick}>About</NavLink>
      </nav>
    );
  }
};

export default Nav;