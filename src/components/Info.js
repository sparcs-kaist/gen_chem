import React, {Component} from 'react';
import '../grid.css';

const Info = ({match}) => {
    return (
            <div style={style}>
                포스트 {match.params.id}
            </div>
    );
};

const style = {
    height : "250px",
    paddingTop : "50px",
    paddingLeft : "50px"
,    backgroundColor:"lightgray"
}

export default Info;