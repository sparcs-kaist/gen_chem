import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../grid.css';
import Info from './Info.js';
import './infostyle.css';

function getNextMonth(month) {
    if (month == 12)
        return 1;

    return month+1;
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

function getCalendar(year, month) {
    var days = [];
    var firstDay = getFirstDay(year, month);

    var i;
    for (var i=0;i<firstDay;i++) {
        days.push({
            Day : "",
            info : "Nothing"
        });
    }

    for (i=1;i<=getDaysofMonth(year, month);i++) {
        days.push({
            Day : i.toString(),
            info : "Nothing"
        })
    }

    return days;
}

const day  = {
    width : '13.8%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    margin : "1px",
    textAlign : "center",
    fontSize : "20pt",
    float : 'left',
    lineHeight : "70px"
}

const Calander = getCalendar(2017,11).map((item)=> {
        return (
            <div>
                <Link to={'/ch102/schedule/' + item.Day}>
                    <div style={day}>
                        {item.Day}
                    </div>
                </Link>
                <div style={{display : 'none'}}>
                    {item.info}
                </div>
            </div>
        );
    }
)

const dayweek = ['Sun', 'Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat"]

const dayofweek = dayweek.map((item)=>{
	return (
		<div style = {{width : '13.8%', height : '30px', fontSize : '10pt', lineHeight : '30px', margin :'1px', float : 'left', textAlign : 'center'}}>
			{item}
		</div>
	);
})

const Schedule = ({match}) => {
    return (
        <div className = "section">
            <div className = "row" style = {{marginTop : '80px'}}>
                <div className = "col span-8-of-12">
                    {dayofweek}
                    {Calander}
                </div>
                <img src='https://goo.gl/CTk1PE' className = "bar"/>
                <div className="col span-3-of-12">
                    <Route path={'/ch102/schedule/:id'} component={Info} />
                </div>
            </div>
        </div>
    );
};

export default Schedule;