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
    height : "300px",
    backgroundColor:"gray"
}

export default Info;