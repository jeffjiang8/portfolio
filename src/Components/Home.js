import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className={this.props.view?`home slider`:`home slider closed`}>
                <h1 className="header">I'm Jinfeng (Jeff) Jiang.</h1>
                <div className="home-desc">
                    <p>Recently graduated Full Stack Developer skilled in circuit building, Ruby on Rails, JavaScript, and React,</p> 
                    <p>combining the skill set in Electrical Engineering with the mindset of Software Engineer.</p>
                    <p>Through being a participant of the Rutgers F1 team in the past,</p>
                    <p> I discovered a passion and curiosity for solving problems through analytics.</p>
                </div>
            </div>
        );
    }
}

export default Home;