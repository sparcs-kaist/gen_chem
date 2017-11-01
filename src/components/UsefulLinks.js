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
];

function LinkList(props) {
    const data = props.data;
    const listItem = data.map((link) =>
        <div>
            <div className="row" style={rowStyle}>
                <div className = "col span-2-of-2">
                    <a href={link.link}>
                        <p style={titleStyle}>{link.title}</p>
                    </a>
                </div>
            </div>
            <div className="row" style={rowStyle}>
                <div className = "col span-2-of-2">
                    <a href={link.link}>
                        <p style={descriptionStyle}>{link.description}</p>
                    </a>
                </div>
            </div>
        </div>

    );
    return <div>{listItem}</div>
}

class UsefulLinks extends Component{
    render () {
        return (
            <div className="section">
                <LinkList data={realData} />
            </div>
        );
    }
}

const rowStyle = {
    fontFamily: 'Nanum Square',
    cursor: 'pointer',
};

const titleStyle = {
    marginTop: '10px',
    marginBottom: '0px',
    textAlign: 'left',
    fontSize: '50px',
    fontWeight: '600',
};

const descriptionStyle = {
    marginTop: '5px',
    marginBottom: '0px',
    textAlign: 'left',
    fontSize: '30px',
    fontWeight: '400',
};

export default UsefulLinks;