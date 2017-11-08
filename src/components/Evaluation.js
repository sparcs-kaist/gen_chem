import './../grid.css';
import './../Nanum.css';
import './../evaluation.css'
import React, { Component } from 'react';

class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.post = "Grading\n" +
            " \n" +
            " : Total 10 experiments X 100 pts = 1000 pts\n" +
            "  A(45-50%), B (45%-50%), C-D (5%) per one class\n" +
            " \n" +
            "  Evaluation Method and point distribution per experiment\n" +
            "   : One experiment = 100 pts\n" +
            " \n" +
            "         1) Pre- and post- laboratory quizzes  (30 points)\n" +
            " \n" +
            "  2) Attitude (20 points)\n" +
            "            (a) Lateness (5 pts)\n" +
            "            (b) Lab Safety or Cleanup (10 pts)\n" +
            "            (c) Concentration or Comprehension (5 pts)   \n" +
            "          \n" +
            "   3) Laboratory Reports  (40 points)\n" +
            "            (a) Introduction\n" +
            "            (b) Result\n" +
            "            (c) Discussion\n" +
            "               o Summary\n" +
            "               o Assessing the results\n" +
            "               0 Conclusions\n" +
            "          (d) Reference\n" +
            " \n" +
            "         4) Laboratory Questions (10 pts)";
    }

    render() {
        return (
            <div class="section">
                <div class="row" style={{paddingLeft:"15%",paddingRight:"15%",paddingTop:"30px"}}>
                    <div class="col span-3-of-3">
                        <h1 class="subjectstyle">Grade</h1>
                        <p class="fontstyle">
                            Total 10 experiments X 100 pts = 1000 pts
                        </p>
                        <p class="fontstyle">
                            A(45-50%), B (45%-50%), C-D (5%) per one class
                        </p>
                        <br />

                        <h1 class="subjectstyle">Evaluation</h1>
                        <p class="fontstyle">
                            One experiment = 100 pts
                        </p>
                        <ol class="fontstyle">
                            <li style={{paddingBottom:"10px"}}>
                                Pre- and post- laboratory quizzes  (30 points)
                            </li>
                            <li style={{paddingBottom:"10px"}}>
                                Attitude (20 points)
                                <ol style={{listStyle:"lower-alpha"}}>
                                    <li style={{paddingBottom:"10px", paddingTop:"10px"}}>
                                        Lateness (5 pts)
                                    </li>
                                    <li style={{paddingBottom:"10px"}}>
                                        Lab Safety or Cleanup (10 pts)
                                    </li>
                                    <li style={{paddingBottom:"10px"}}>
                                        Concentration or Comprehension (5 pts)
                                    </li>
                                </ol>
                            </li>
                            <li style={{paddingBottom:"10px"}}>
                                Laboratory Reports  (40 points)
                                <ol style={{listStyle:"lower-alpha"}}>
                                    <li style={{paddingBottom:"10px", paddingTop:"10px"}}>
                                        Introduction
                                    </li>
                                    <li style={{paddingBottom:"10px"}}>
                                        Result
                                    </li>
                                    <li style={{paddingBottom:"10px"}}>
                                        Discussion
                                        <ul>
                                            <li style={{paddingBottom:"10px", paddingTop:"10px"}}>
                                                Summary
                                            </li>
                                            <li style={{paddingBottom:"10px"}}>
                                                Assessing the results
                                            </li>
                                            <li style={{paddingBottom:"10px"}}>
                                                Conclusions
                                            </li>
                                        </ul>
                                    </li>
                                    <li style={{paddingBottom:"10px"}}>
                                        Reference
                                    </li>
                                </ol>
                            </li>
                            <li style={{paddingBottom:"10px"}}>
                                Laboratory Questions (10 pts)
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Evaluation;