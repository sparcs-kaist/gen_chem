import axios from '../axios-auth';
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

function getDayList(year, month, schedule) {
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
            hasQuiz : Math.random() >= 0.5,
            hasExam : Math.random() >= 0.5,
            hasRecitation : Math.random() >= 0.5,
            Quiz : "Lorem ipsum dolor sit amet, consectetur",
            Exam : "Lorem ipsum dolor sit amet, consectetur",
            Recitation : "Lorem ipsum dolor sit amet, consectetur"


        });
        cnt++;
    }

    for (i=1;i<=dayNum;i++) {
        var date = cnt%7;
        var hasQuiz = false;
        var hasExam = false;
        var hasRecitation = false;
        var Quiz = "quiz";
        var Exam = "exam";
        var Recitation = "recitation";
        schedule.map((item, index) => {
            let parsed = item.fields.event_date.split("T")[0].split("-");
            if (parseInt(parsed[0]) == year &&
                parseInt(parsed[1]) == month &&
                parseInt(parsed[2]) == i
            ) {
                if (item.fields.type == "quiz") {
                    hasQuiz = true;
                    Quiz = item.fields.description;
                }
                if (item.fields.type == "exam") {
                    hasExam = true;
                    Exam = item.fields.description;
                }
                if (item.fields.type == "recitation") {
                    hasRecitation = true;
                    Recitation = item.fields.description;
                }
            }
        });

        days.push({
            Day : i.toString(),
            info : "Nothing",
            stat : "curr",
            DayNum : date,
            hasQuiz : hasQuiz,
            hasExam : hasExam,
            hasRecitation : hasRecitation,
            Quiz : Quiz,
            Exam : Exam,
            Recitation : Recitation,
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
            hasQuiz : Math.random() >= 0.5,
            hasExam : Math.random() >= 0.5,
            hasRecitation : Math.random() >= 0.5,
            Quiz : "Lorem ipsum dolor sit amet, consectetur adipiscing",
            Exam : "Lorem ipsum dolor sit amet, consectetur adipiscing",
            Recitation : "Lorem ipsum dolor sit amet, consectetur adipiscing"

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
    /*lineHeight : "70px",*/
    cursor : 'pointer'
}

const today  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "1.3em",
    float : 'left',
    /*lineHeight : "70px",*/
    cursor : 'pointer',
    color : 'white',
}

const sunday  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "1.3em",
    float : 'left',
    color:'red',
    /*lineHeight : "70px",*/
    cursor : 'pointer'
}

const saturday  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "1.3em",
    float : 'left',
    /*lineHeight : "70px",*/
    color : "blue",
    cursor : 'pointer'
}

const notCurrday  = {
    width : '14.2%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    marginTop : '1px',
    textAlign : "center",
    fontSize : "1.3em",
    float : 'left',
    /*lineHeight : "70px",*/
    color : "#C2C2C2"
}

const quiz ={
    width : '6px',
    height : '6px',
    marginLeft : '31.5%',
    marginTop : '7px',
    borderRadius : '6px',
    backgroundColor : "#DEA0EB",
    float : 'left',

}

const exam = {
    width : '6px',
    height : '6px',
    marginLeft : '7.3%',
    marginTop : '7px',
    borderRadius : '6px',
    backgroundColor : "#884597",
    float : 'left',

}

const recit = {
    width : '6px',
    height : '6px',
    marginLeft : '7.3%',
    marginTop : '7px',
    borderRadius : '6px',
    backgroundColor : "#460454",
    float : 'left',

}

const nodot1 = {
    width : '6px',
    height : '6px',
    marginLeft : '31.5%',
    marginTop : '7px',
    borderRadius : '6px',
    backgroundColor : "#ffffff",
    float : 'left',
}

const nodot2 = {
    width : '6px',
    height : '6px',
    marginLeft : '7.3%',
    marginTop : '7px',
    borderRadius : '6px',
    backgroundColor : '#ffffff',
    float : 'left',
}

export default class Calendar extends Component {
    render () {
        var dayList = getDayList(this.props.Year, this.props.Month, this.props.AllSchedule);
        var year = this.props.Year;
        var today = new Date();
        var noDot1 = <div style = {nodot1}></div>
        var noDot2 = <div style = {nodot2}></div>

        return (
            <div>
            {
            dayList.map((item)=> {
                let calendar_date = null;
                let Quiz = noDot1;
                let Exam = noDot2;
                let Recitation = noDot2;
                let currday = item.Day;
                if (item.hasQuiz) {
                    Quiz = <div style = {quiz}></div>
                }
                if (item.hasExam) {
                    Exam = <div style = {exam}></div>
                }
                if (item.hasRecitation) {
                    Recitation = <div style = {recit}></div>
                }
                if (this.props.Month == today.getMonth()+1
                    && this.props.Year == today.getFullYear()
                    && item.Day == today.getDate()
                    && item.stat == "curr")
                    {currday = <div style={{width : "39px", height : '30px',margin:'auto', backgroundColor: "#ed4731", fontWeight : "1000", borderRadius : "40px", paddingTop : "8.3px", marginTop : "-8px",}}><span style={{color : 'white'}}>{item.Day}</span></div>}
                if (item.Day == this.props.Viewday && item.stat == "curr") {
                    currday = <div style={{width : "39px", height : '30px',margin:'auto', backgroundColor: "#d3d3d3", fontWeight : "1000", borderRadius : "40px", paddingTop : "8.3px", marginTop : "-8px",}}>{item.Day}</div>
                }
                if (item.stat=="curr") {
                    if ( item.Day == today.getDate() && this.props.Month == today.getMonth()+1 && this.props.Year == today.getFullYear() ) {
                        calendar_date = <div style={day}>
                        {Quiz}{Exam}{Recitation}<br/>
                        {currday}
                        </div>;
                    } else if (item.DayNum==0) {
                        calendar_date = <div style={sunday}>
                        {Quiz}{Exam}{Recitation}<br/>
                        {currday}
                        </div>;
                    } else if (item.DayNum==6) {
                        calendar_date = <div style={saturday}>
                        {Quiz}{Exam}{Recitation}<br/>
                        {currday}
                        </div>;
                    } else {
                        calendar_date = <div style={day}>
                        {Quiz}{Exam}{Recitation}<br/>
                        {currday}
                        </div>;
                    }
                } else {
                    calendar_date = <div style={notCurrday}><br/>{currday}</div>;
                }

                return (
                    <div>
                        <MediaQuery query="(min-Width : 900px)">
                            <div onClick={() => {this.props.setPost(
                                item.Day, item.hasQuiz, item.Quiz, item.hasExam, item.Exam, item.hasRecitation, item.Recitation)}}>
                                {calendar_date}
                            </div>
                        </MediaQuery>
                        <MediaQuery query="(max-Width : 900px)">
                            <div onClick={() => {this.props.setModal(
                                item.Day, item.hasQuiz, item.Quiz, item.hasExam, item.Exam, item.hasRecitation, item.Recitation)}}>
                                {calendar_date}
                            </div>
                        </MediaQuery>
                    </div>
                );})}
            </div>
        );
    }
}