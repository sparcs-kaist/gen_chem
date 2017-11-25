import React, { Component } from 'react';
import '../grid.css';

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
        days.push({
            Day : prevDay.toString(),
            info : "Nothing",
            stat : "prev"
        });
        cnt++;
    }

    for (i=1;i<=dayNum;i++) {
        days.push({
            Day : i.toString(),
            info : "Nothing",
            stat : "curr"
        });
        cnt++;
    }

    var leftDay = 42 - cnt  ;
    for (i=1;i<=leftDay;i++) {
        days.push({
            Day : i.toString(),
            info : "Nothing",
            stat : "next"
        })
    }

    return days;
}

const day  = {
    width : '14%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    textAlign : "center",
    marginTop : '1px',
    fontSize : "20pt",
    float : 'left',
    lineHeight : "70px"
}

const notCurrday  = {
    width : '14%',
    height : "70px",
    /*backgroundColor: "lightgray",*/
    marginTop : '1px',
    textAlign : "center",
    fontSize : "20pt",
    float : 'left',
    lineHeight : "70px",
    color : "#C2C2C2"
}

export default class Calendar extends Component {
    render () {
        var dayList = getDayList(this.props.Year, this.props.Month);
        var year = this.props.Year;

        return (
            <div>
            {
            dayList.map((item)=> {
                    return (
                        <div>
                            {item.stat=="curr"?
                                <div style={day} onClick={() => {this.props.setPost(item.info)}}>
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
            }
            </div>
        );
    }
}