import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../grid.css';
import Info from './Info.js';
import './infostyle.css';
import left from './img/left.png'
import right from './img/right.png'


var today = new Date();
var todayYear = today.getFullYear();
var todayMonth = today.getMonth()+1;
var todayDate = today.getDate();

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

function getDaysofMonth(year, month) {
    if (month == 2) {
        if (year%4 == 0) return 29;
        else return 28;
    }

    if (month < 8) {
        if (month%2 == 0) return 30;
        else return 31;
    }

    if (month%2 == 0) return 31;
    return 30;
}

function getFirstDay(year, month) {
    var days = 1;

    days += (year-1900)*365;
    days += parseInt((year-1900)/4);
    if (month < 3 && year%4 == 0) days -= 1;

    for (var i=1;i<month;i++) {
        days += getDaysofMonth(year,i);
    }

    return days%7;
}

function getDayList(year, month) {
    var days = [];
    var firstDay = getFirstDay(year, month);
    var dayNum = getDaysofMonth(year, month);
    var prevMonth = getPrevMonth(year, month);

    var i;
    var cnt = 0;
    for (i=0;i<firstDay;i++) {
        var prevDay = getDaysofMonth(year,prevMonth)-firstDay+i+1;
        days.push({
            Day : prevDay.toString(),
            infohead : "Nothing",
            infocontent : "Nothing",
            stat : "prev"
        });
        cnt++;
    }

    for (i=1;i<=dayNum;i++) {
        days.push({
            Day : i.toString(),
            infohead : "Nothing",
            infocontent : "Nothing",
            stat : "curr"
        })
        cnt++;
    }

    var leftDay = 42 - cnt  ;
    for (i=1;i<=leftDay;i++) {
        days.push({
            Day : i.toString(),
            infohead : "Nothing",
            infocontent : "Nothing",
            stat : "next"
        })
    }

    return days;
}

const day  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "20pt",
    float : 'left',
    lineHeight : "70px"
}

const notCurrday  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    marginTop : '1px',
    textAlign : "center",
    fontSize : "20pt",
    float : 'left',
    lineHeight : "70px",
    color : "#C2C2C2"
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
            Head : "No Post",
            Content : "-"
        };

        this.nextCalendar = this.nextCalendar.bind(this);
        this.prevCalendar = this.prevCalendar.bind(this);
    }

    prevCalendar () {
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

    nextCalendar () {
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
        var dayList = getDayList(this.state.Year, this.state.Month);
        var Calendar = dayList.map((item)=> {
                return (
                    <div>
                        {item.stat=="curr"?
                            <div style={day} onClick={this.setPost.bind(this, this.state.Head = item.infohead, this.state.Content = item.infocontent)}>
                                {item.Day}
                            </div> :
                            <div style={notCurrday}>
                                {item.Day}
                            </div>
                        }
                    </div>
                );
            }
        )

        return (
            <div className = "section">
                <div className = "row" style = {{marginTop : '40px'}}>
                    <div className = "col span-8-of-12">
                        <div style = {{width : '100%', fontSize :'14px', textAlign : 'center', marginBottom : '5px'}}>
                            {this.state.Year}
                        </div>
                        <div className = "row" style = {{marginBottom : '30px'}}>
                            <div style = {{float:'left'}} onClick={this.prevCalendar}>
                                <img src={left} style={{width : '15px', marginTop :'5px'}}/>
                            </div>
                            <div style = {{float : "right"}} onClick={this.nextCalendar}>
                                <img src={right} style={{width : '15px', marginTop :'5px'}}/>
                            </div>
                            <div className = "month">
                                {this.state.Month}
                            </div>
                        </div>
                        {dayofweek}
                        {Calendar}

                    </div>
                    <div style = {{height : '100%'}}>
                        <img src='https://goo.gl/CTk1PE' className = "bar"/>
                    </div>
                    <div className="col span-3-of-12">
                        <div style='moreinfo'>
                            {this.state.Head}<br/>
                            {this.state.Content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;