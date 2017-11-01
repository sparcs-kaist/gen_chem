import React, { Component } from 'react';
import './../grid.css';
import './../Nanum.css';

class NoticeSection extends Component {
  render() {
    const { title, date, content } = this.props.data;
    const { titleStyle, contentStyle, dateStyle, sectionStyle } = styles;

    return (
      <div className="section" style={sectionStyle}>
        <div className="row">
          <div className="col span-3-of-12">
            <h1 style = {titleStyle}>{title}</h1>
            <h2 style = {dateStyle}>{date}</h2>
          </div>
          <div className="col span-1-of-12">
          </div>
          <div className="col span-8-of-12">
            <p style={contentStyle}>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  titleStyle : {
    margin: '0 auto 12px auto',
  },
  contentStyle : {
    margin: '0 auto 48px auto',
    fontSize: 18
  },
  dateStyle: {
    margin: '0 auto 12px auto',
    color: '#4D4D4D'
  },
  sectionStyle: {
    fontFamily: 'Nanum Square',
  }
};

export default NoticeSection;