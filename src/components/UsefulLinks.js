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

class LinkElem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hover: false
    }
    this.onHover = this.onHover.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  onHover () {
    this.setState({
      hover: true
    })
  }

  onLeave () {
    this.setState({
      hover: false
    })
  }

  render () {
    return (<div className="list-item" onMouseEnter={() => this.onHover()} onMouseLeave={()=> this.onLeave()} style={{ opacity: this.state.hover ? 0.7 : 1 }}>
          <div className="row" style={{...rowStyle }}>
              <div className = "col span-2-of-2">
                  <a href={this.props.link}>
                      <p className="title" style={titleStyle}>{this.props.title}</p>
                  </a>
              </div>
          </div>
          <div className="row" style={rowStyle}>
              <div className = "col span-2-of-2">
                  <a href={this.props.link}>
                      <p className="description" style={descriptionStyle}>{this.props.description}</p>
                  </a>
              </div>
          </div>
      </div>);
  }
}

class LinkList extends Component {

    render () {
      const data = this.props.data;

      const listItem = data.map((link, index) =>

        <LinkElem key={index} link = {link.link} title = {link.title} description = {link.description} />
      );
      return <div>{listItem}</div>
    }

}

class UsefulLinks extends Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="section" style={sectionStyle}>
                <LinkList data={realData} />
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