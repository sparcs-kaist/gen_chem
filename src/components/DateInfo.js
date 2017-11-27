import React, { Component } from 'react';
import left from './img/left.png'
import right from './img/right.png'
import '../grid.css';

export default class DateInfo extends Component {
    render() {
        let Post = null;
        let Quiz = null;
        let Exam = null;
        let Recitation = null;

        if (this.props.hasQuiz || this.props.hasExam || this.props.hasRecitation) {
            if (this.props.hasQuiz) {
                Quiz = <div>Quiz : {this.props.Quiz}</div>
            }
            if (this.props.hasExam) {
                Exam = <div>Exam : {this.props.Exam}</div>
            }
            if (this.props.hasRecitation) {
                Recitation = <div>Recitation : {this.props.Recitation}</div>
            }

            Post = <div>
                {Quiz}
                {Exam}
                {Recitation}
            </div>

        } else {
            Post = "No Info"
        }

        return (
            <div>
                {Post}
            </div>
        );
    }
}