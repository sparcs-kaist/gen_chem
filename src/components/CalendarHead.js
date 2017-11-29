import React, { Component } from 'react';
import left from './img/left.png'
import right from './img/right.png'
import '../grid.css';

export default class CalendarHead extends Component {
    render() {
        return (
            <div>
                <div style={{width: '100%', fontSize: '14px', textAlign: 'center', marginBottom: '5px'}}>
                    {this.props.Year}
                </div>
                <div className="row" style={{marginBottom: '30px'}}>
                    <div style={{float: 'left'}} onClick={this.props.decreaseMonth}>
                        <img src={left} style={{width: '15px', marginTop: '5px', cursor: 'pointer'}}/>
                    </div>
                    <div style={{float: "right"}} onClick={this.props.increaseMonth}>
                        <img src={right} style={{width: '15px', marginTop: '5px', cursor: 'pointer'}}/>
                    </div>
                    <div className="month">
                        {this.props.Month}
                    </div>
                </div>
            </div>
        );
    }
}