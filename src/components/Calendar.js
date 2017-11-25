import React, { Component } from 'react';
import '../grid.css';
import './infostyle.css';
import MediaQuery from 'react-responsive';

function getPrevMonth(month) {
    if (month == 1)
        return 12;

    return month-1;
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

function getDayList(year, month) {
    var days = [];
    var firstDay = getFirstDay(year, month);
    var dayNum = getDaysofMonth(year, month);
    var prevMonth = getPrevMonth(year, month);

    var i;
    var cnt = 0;
    for (i=0;i<firstDay;i++) {
        var prevDay = getDaysofMonth(year,prevMonth)-firstDay+i+1;
        var date = cnt%7;
        days.push({
            Day : prevDay.toString(),
            info : "Nothing",
            stat : "prev",
            DayNum : date,

        });
        cnt++;
    }

    for (i=1;i<=dayNum;i++) {
        var date = cnt%7;
        days.push({
            Day : i.toString(),
            info : "Nothing",
            stat : "curr",
            DayNum : date,
            hasQuiz : true,
            hasExam : true,
            hasRecitation : true,
            Quiz : "quiz",
            Exam : "exam",
            Recitation : "recitation class"
        });
        cnt++;
    }

    var leftDay = 42 - cnt  ;
    for (i=1;i<=leftDay;i++) {
        var date = cnt%7;
        days.push({
            Day : i.toString(),
            info : "Nothing",
            stat : "next",
            DayNum : date,

        })
        cnt++;
    }

    return days;
}

const day  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "1.3em",
    float : 'left',
    lineHeight : "70px"
}

const sunday  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "1.3em",
    float : 'left',
    lineHeight : "70px",
    color : "red"
}

const saturday  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "1.3em",
    float : 'left',
    lineHeight : "70px",
    color : "blue"
}

const notCurrday  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    marginTop : '1px',
    textAlign : "center",
    fontSize : "1.3em",
    float : 'left',
    lineHeight : "70px",
    color : "#C2C2C2"
}

export default class Calendar extends Component {
    render () {
        var dayList = getDayList(this.props.Year, this.props.Month);
        var year = this.props.Year;
        var today = new Date();

        return (
            <div>
            {
            dayList.map((item)=> {
                let calendar_date = null;
                let currday = item.Day;
                if (this.props.Month == today.getMonth()+1
                    && this.props.Year == today.getFullYear()
                    && item.Day == today.getDate())
                    currday = <div style={{fontWeight : "900"}}>{item.Day}</div>

                if (item.stat=="curr") {
                    if (item.DayNum==0) {
                        calendar_date = <div style={sunday}>{currday}</div>;
                    } else if (item.DayNum==6) {
                        calendar_date = <div style={saturday}>{currday}</div>;
                    } else {
                        calendar_date = <div style={day}>{currday}</div>;
                    }
                } else {
                    calendar_date = <div style={notCurrday}>{currday}</div>;
                }

                return (
                    <div>
                        <MediaQuery query="(min-Width : 900px)">
                            <div onClick={() => {this.props.setPost(
                                item.hasQuiz, item.Quiz, item.hasExam, item.Exam, item.hasRecitation, item.Recitation)}}>
                                {calendar_date}
                            </div>
                        </MediaQuery>
                        <MediaQuery query="(max-Width : 900px)">
                            <div onClick={() => {this.props.setModal(
                                item.hasQuiz, item.Quiz, item.hasExam, item.Exam, item.hasRecitation, item.Recitation)}}>
                                {calendar_date}
                            </div>
                        </MediaQuery>
                    </div>
                );})}
            </div>
        );
    }
}