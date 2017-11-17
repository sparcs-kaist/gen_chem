import React, {Component} from 'react';
import '../grid.css';

const Info = ({match}) => {
    return (
            <div style={style}>
	            <div style = {{float : 'left'}}>
	                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsQiuBbhOuktgDwJW73oaiGVFyuCTDq38NFcl-gvngd9ZJxTMqK_3ai5j' style = {{height : '200px'}}/>
	            </div>
	            <div style = {{marginLeft : '70px', fontSize : '20pt'}}>
                포스트 {match.params.id}
              </div>
            </div>
    );
};

const style = {
    height : "250px",
    marginTop : '35px',
    paddingTop : "50px",
}

export default Info;