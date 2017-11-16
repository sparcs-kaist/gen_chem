import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import '../grid.css';
import Info from './Info.js';

const Days = [
    {
        Day : "1",
        info: "Nothing"
    },
    {
        Day : "2",
        info : "Also nothing"
    },{
        Day : "3",
        info: "Nothing"
    },
    {
        Day : "4",
        info : "Also nothing"
    },{
        Day : "5",
        info: "Nothing"
    },
    {
        Day : "6",
        info : "Also nothing"
    },{
        Day : "7",
        info: "Nothing"
    },
    {
        Day : "8",
        info : "Also nothing"
    },{
        Day : "9",
        info: "Nothing"
    },
    {
        Day : "10",
        info : "Also nothing"
    },{
        Day : "11",
        info: "Nothing"
    },
    {
        Day : "12",
        info : "Also nothing"
    },{
        Day : "13",
        info: "Nothing"
    },
    {
        Day : "14",
        info : "Also nothing"
    },{
        Day : "15",
        info: "Nothing"
    },
    {
        Day : "16",
        info : "Also nothing"
    },{
        Day : "17",
        info: "Nothing"
    },
    {
        Day : "18",
        info : "Also nothing"
    },{
        Day : "19",
        info: "Nothing"
    },
    {
        Day : "20",
        info : "Also nothing"
    },{
        Day : "21",
        info: "Nothing"
    },
    {
        Day : "22",
        info : "Also nothing"
    },{
        Day : "23",
        info: "Nothing"
    },
    {
        Day : "24",
        info : "Also nothing"
    },{
        Day : "25",
        info: "Nothing"
    },
    {
        Day : "26",
        info : "Also nothing"
    }
]

const day  = {
    width : '13.5%',
    height : "50px",
    backgroundColor: "lightgray",
    margin : "1px",
    float : 'left'
}


const Calander = Days.map((item)=> {
        return (
            <div>
                <Link to={'/ch102/schedule/{item.Day}'}>
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

const Schedule = ({match}) => {
    return (
        <div className = "section">
            <div className = "row">
                <div className = "col span-8-of-12">
                    {Calander}
                </div>
                <div className="col span-4-of-12">
                    <Route path={'/ch102/schedule/:id'} component={Info}/>
                </div>
            </div>
        </div>
    );
};

export default Schedule;