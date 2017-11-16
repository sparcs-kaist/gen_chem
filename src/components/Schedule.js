import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import '../grid.css';
import '../Schedule.css'

Days = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

const Calander = Days.map((item)=> {
        return (
            <div className="day">
                <Link to="../schedulei">item</Link>
            </div>
        );
    }
)

class SChedule extends Component {
    render() {
        return (
            <div className = "section">
                <div className = "row">
                    <div className = "col span-2-of-3">
                        {Calander}
                    </div>
                    <div className="col span-1-of-3">
                            <Route path="/about" component={Info}/>
                    </div>
                </div>
            </div>
        )
    }
}