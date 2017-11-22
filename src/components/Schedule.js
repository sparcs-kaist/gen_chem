import React, { Component } from 'react';
import '../grid.css';
import './infostyle.css';

import Calendar from './Calendar';
import CalendarHead from "./CalendarHead";

function getNextMonth(month) {
    if (month == 12)
        return 1;

    return month+1;
}

function getPrevMonth(month) {
    if (month == 1)
        return 12;

    return month-1;
}

const dayweek = ['Sun', 'Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat"];

const dayofweek = dayweek.map((item)=>{
    return (
        <div className = "dayofweek">
            {item}
        </div>
    );
});

class Schedule extends Component {
    constructor(props){
        super(props);

        var today = new Date();
        var currYear = today.getFullYear();
        var currMonth = today.getMonth()+1;

        this.state = {
            Today : today,
            Year : currYear,
            Month : currMonth,
            Post : "No Post"
        };

        this.increaseMonth = this.increaseMonth.bind(this);
        this.decreaseMonth = this.decreaseMonth.bind(this);
        this.setPost = this.setPost.bind(this);
    }

    decreaseMonth () {
        var prevMonth = this.state.Month;
        var prevYear = this.state.Year;
        if (this.state.Month == 1)
            prevYear -= 1;
        prevMonth = getPrevMonth(prevMonth);

        this.setState ({
            Month : prevMonth,
            Year : prevYear
        });
    }

    increaseMonth () {
        var nextMonth = this.state.Month;
        var nextYear = this.state.Year;
        if (this.state.Month == 12)
            nextYear += 1;
        nextMonth = getNextMonth(nextMonth);

        this.setState ({
            Month : nextMonth,
            Year : nextYear
        });
    }

    setPost (post) {
        this.setState ({
            Post : post
        })
    }

    render () {
        return (
            <div className = "section">
                <div className = "row" style = {{marginTop : '40px'}}>
                    <div className = "col span-8-of-12">
                        <CalendarHead Month={this.state.Month}
                                      Year={this.state.Year}
                                      increaseMonth={this.increaseMonth}
                                      decreaseMonth={this.decreaseMonth}/>
                        {dayofweek}
                        <Calendar Month={this.state.Month}
                                  Year={this.state.Year}
                                  setPost={this.setPost}/>

                    </div>
                    <img src='https://goo.gl/CTk1PE' className = "bar"/>
                    <div className="col span-3-of-12">
                        {this.state.Post}
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;