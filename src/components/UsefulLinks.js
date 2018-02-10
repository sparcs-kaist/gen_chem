import React, { Component } from 'react';
import '../grid.css';
import '../Nanum.css';
import '../UsefulLinks.css';
import axios from '../axios-auth';

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
    return (<div className="list-item" onMouseEnter={() => this.onHover()} onMouseLeave={()=> this.onLeave()} style={{ zIndex: -1, opacity: this.state.hover ? 0.5 : 1 }}>
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
    constructor(props) {
      super(props);
    }

    render () {
      const data = this.props.data;

      const listItem = data.map((item, index) =>
        <LinkElem key={index} link = {item.fields.link} title = {item.fields.title} description = {item.fields.description} />);
      return <div>{listItem}</div>
    }

}

class UsefulLinks extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        }
    }

    componentDidMount() {
      axios.get('/ch102/links/')
        .then((response) => {
          const result = JSON.parse(response.data);
          this.setState({
            data: result,
          })
        })
    }

    render () {
        return (
            <div className="section" style={sectionStyle}>
                <LinkList data={this.state.data} />
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
