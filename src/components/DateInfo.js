import React, { Component } from 'react';
import left from './img/left.png'
import right from './img/right.png'
import '../grid.css';

const quiz = {
    width : '10px',
    height : '10px',
    borderRadius : '10px',
    backgroundColor : '#DEA0EB',
    marginBottom : '7px'
}

const exam = {
    width : '10px',
    height : '10px',
    borderRadius : '10px',
    backgroundColor : '#884597',
    marginBottom : '7px'
}

const recitation = {
    width : '10px',
    height : '10px',
    borderRadius : '10px',
    backgroundColor : '#460454',
    marginBottom : '7px'
}

export default class DateInfo extends Component {
    render() {
        let Post = null;
        let Quiz = null;
        let Exam = null;
        let Recitation = null;

        if (this.props.hasQuiz || this.props.hasExam || this.props.hasRecitation) {
            if (this.props.hasQuiz) {
                Quiz = <div style = {{marginBottom : '30px'}}>
                    <div style = {quiz}/>
                    <div>
                        <span style={{fontSize : '15.5pt', fontWeight : '900'}}>Quiz</span>
                    </div>
                    <span style = {{fontSize : '12.5pt', marginLeft : '2px'}}>{this.props.Quiz}</span>
                </div>
            }
            if (this.props.hasExam) {
                Exam = <div style = {{marginBottom : '30px'}}>
                    <div style = {exam}/>
                    <div>
                        <span style={{fontSize : '15.5pt', fontWeight : '900'}}>Exam</span>
                    </div>
                    <span style = {{fontSize : '12.5pt', marginLeft : '2px'}}>{this.props.Exam}</span>
                </div>
            }
            if (this.props.hasRecitation) {
                Recitation = <div style = {{marginBottom : '30px'}}>
                    <div style = {recitation}/>
                    <div>
                        <span style={{fontSize : '15.5pt', fontWeight : '900'}}>Recitation</span>
                    </div>
                    <span style = {{fontSize : '12.5pt', marginLeft : '2px'}}>{this.props.Recitation}</span>
                </div>
            }

            Post = <div style = {{marginLeft:'5%'}}>
                <span style={{fontSize :'19pt', fontWeight : '700'}}>{this.props.Viewmonth}/{this.props.Viewday}</span><br/><br/>
                {Quiz}
                {Exam}
                {Recitation}
            </div>

        } else {
            Post = <div style = {{marginLeft:'5%'}}>
            <span style={{fontSize : '19pt', fontWeight:'700'}}>{this.props.Viewmonth}/{this.props.Viewday}</span><br/><br/>
            <span style={{fontSize : '14pt', color : '#BABABA', fontWeight : '700'}}>
            Nothing to do
            </span>
            </div>
        }

        return (
            <div>
                {Post}
            </div>
        );
    }
}