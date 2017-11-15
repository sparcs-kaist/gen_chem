import React, { Component } from 'react';
import '../grid.css';
import '../Nanum.css';
import '../UsefulLinks.css';

const realData  = [
    {title: "How to use beakers",
    description: "How to use beakers without breaking your arm video",
    link: "www.youtube.com"},
    {title: "General Chemistry Introduction",
    description: "Intro to genchem in 5 seconds",
    link: "klms.kaist.ac.kr"},
    {title: "Whatever video you want",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "google.com"}
];

const LinkList = (props)  => {
    const data = props.data;
    const handler1 = props.onMouseEnter;
    const handler2 = props.onMouseLeave;

    const listItem = data.map((link, index) =>
        <div key={index} className="list-item" onMouseEnter={handler1} onMouseLeave={handler2}>
            <div className="row" style={{...rowStyle, color: (props.state) ? '#888888': '#000000' }}>
                <div className = "col span-2-of-2">
                    <a href={link.link}>
                        <p className="title" style={titleStyle}>{link.title}</p>
                    </a>
                </div>
            </div>
            <div className="row" style={rowStyle}>
                <div className = "col span-2-of-2">
                    <a href={link.link}>
                        <p className="description" style={descriptionStyle}>{link.description}</p>
                    </a>
                </div>
            </div>
        </div>
    );
    return <div>{listItem}</div>
}

class UsefulLinks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        };

        this.OnMouseEnterHandler = this.OnMouseEnterHandler.bind(this);
        this.OnMouseLeaveHandler = this.OnMouseLeaveHandler.bind(this);
    }

    OnMouseEnterHandler() {
        this.setState({
            hovered: true
        });
    }

    OnMouseLeaveHandler() {
        this.setState({
            hovered: false
        });
    }

    render () {
        return (
            <div className="section" style={sectionStyle}>
                <LinkList state={this.state.hovered} onMouseEnter={this.OnMouseEnterHandler} onMouseLeave={this.OnMouseLeaveHandler} data={realData} />
            </div>
        );
    }
}

const rowStyle = {
    fontFamily: 'Nanum Square',
    cursor: 'pointer',
    color: 'black',
};

const titleStyle = {
    marginTop: '0px',
    marginBottom: '0px',
    textAlign: 'left',
    fontWeight: '600',
};

const descriptionStyle = {
    marginTop: '0px',
    marginBottom: '0px',
    paddingLeft: '3px',
    textAlign: 'left',
    fontWeight: '400',
};

const sectionStyle = {
  paddingTop: '54px',
  paddingBottom: '48px'
};

export default UsefulLinks;