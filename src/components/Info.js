import React, {Component} from 'react';
import '../grid.css';
import './infostyle.css';

const Info = ({match}) => {
    return (
            <div className = "style">
	            <div style = {{marginLeft : '70px', fontSize : '20pt'}}>
                포스트 {match.params.id}
              </div>
            </div>
    );
};

export default Info;