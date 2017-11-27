import React, { Component } from 'react';
import '../grid.css';
import './infostyle.css';
import Modal from 'react-modal';
import MediaQuery from 'react-responsive';

import Calendar from './Calendar';
import CalendarHead from "./CalendarHead";
import DateInfo from "./DateInfo";
import close from "./img/close.png";

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

const modalstyle = {
    overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(20, 20, 20, 0.75)'
  },
    content : {
    position                   : 'absolute',
    width : '300px',
    height : '380px',
    top                        : '50%',
    left                       : '50%',
    marginTop : '-230px',
    marginLeft : '-170px',
    background                 : '#fff',
    borderRadius               : '30px',
    overflow :'hidden'
  }
}

const closebutton = {
    position : 'absolute',
    top : '20px',
    right : '20px',
    width : '25px',
    height : '25px',
    opacity : '0.5'
}

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
            Post : "No Post",
            hasQuiz : false,
            hasExam : false,
            hasRecitation : false,
            Quiz : "q",
            Exam : "e",
            Recitation : "r",
            modalIsOpen : false
        };

        this.increaseMonth = this.increaseMonth.bind(this);
        this.decreaseMonth = this.decreaseMonth.bind(this);
        this.setPost = this.setPost.bind(this);
        this.setModal = this.setModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    setPost (hasquiz, quiz, hasexam, exam, hasrecitation, recitation) {
        // this.setState ({
        //     Post : post
        // })
        this.setState ({
            hasQuiz : hasquiz,
            Quiz : quiz,
            hasExam : hasexam,
            Exam : exam,
            hasRecitation : hasrecitation,
            Recitation : recitation
        })
    }

    openModal() {
        this.setState({modalIsOpen : true});
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    setModal (hasquiz, quiz, hasexam, exam, hasrecitation, recitation) {
        // this.setState ({
        //     Post : post,
        //     modalIsOpen : true
        // })
        this.setState ({
            hasQuiz : hasquiz,
            Quiz : quiz,
            hasExam : hasexam,
            Exam : exam,
            hasRecitation : hasrecitation,
            Recitation : recitation,
            modalIsOpen : true
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
                        <div className = "hbar"/>
                        <Calendar Month={this.state.Month}
                                  Year={this.state.Year}
                                  setPost={this.setPost}
                                  setModal={this.setModal}/>

                    </div>
                    <div className = "bar"/>
                    <MediaQuery query = "(min-Width : 900px)">
                        <div className="col span-3-of-12">
                            <DateInfo hasQuiz={this.state.hasQuiz}
                                      hasExam={this.state.hasExam}
                                      hasRecitation={this.state.hasRecitation}
                                      Quiz={this.state.Quiz}
                                      Exam={this.state.Exam}
                                      Recitation={this.state.Recitation}/>
                        </div>
                    </MediaQuery>
                    <MediaQuery query = "(max-Width : 900px)">
                        <Modal isOpen = {this.state.modalIsOpen} onRequestClose={this.closeModal} style={modalstyle}>
                            <p ref={subtitle => this.subtitle = subtitle}>
                                <DateInfo hasQuiz={this.state.hasQuiz}
                                          hasExam={this.state.hasExam}
                                          hasRecitation={this.state.hasRecitation}
                                          Quiz={this.state.Quiz}
                                          Exam={this.state.Exam}
                                          Recitation={this.state.Recitation}/>
                            </p>
                            <img src={close} style = {closebutton} onClick = {this.closeModal}/>
                        </Modal>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Schedule;