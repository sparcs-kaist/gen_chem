import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../grid.css';
import './infostyle.css';
import MediaQuery from 'react-responsive';

class Card extends Component {
	render () {
		return (
		    <div className = "card">
		        <div className = "text">
		            <p>포스트
		                <div className = "button">
		                    <Link to={'/ch102/schedule/'}>close</Link>
		                </div>
		            </p>
		        </div>
		    </div>
		);
	}
}

export default Card;