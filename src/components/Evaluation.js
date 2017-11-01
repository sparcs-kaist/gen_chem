import './../grid.css';
import './../Nanum.css';
import './../evaluation.css';
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
                <div class="row">
                    <div class="col span-3-of-3">
                        <p class="fontstyle">
                            {this.post}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Evaluation;