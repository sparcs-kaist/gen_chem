import './../grid.css';
import './../Nanum.css';
import './../evaluation.css';
import axios from '../axios-auth';
import React, { Component } from 'react';

class SafetyPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h1 className="subjectstyle">{this.props.title}</h1>
                <p className="fontstyle">
                    {this.props.description.split("\n").map((str) => {
                        return (
                            <p className="entrystyle" style={{whiteSpace: "pre-wrap"}}>{str}</p>
                        )
                    })}
                </p>
            </div>
        )
    }
}

class SafetyPosts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let posts = this.props.data.map((item, index) =>
            <div>
                <SafetyPost title={item.fields.title} description={item.fields.description}/>
                <br />
            </div>
        );

        return (
            <div>
                {posts}
            </div>
        )
    }
}

class SafetyRule extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount () {
        axios.get('/ch102/safety/')
            .then((response) => {
                const result = JSON.parse(response.data);

                this.setState({
                    data: result,
                })
            })
    }

    render() {
        return (
            <div className="section" style={{paddingBottom: 48, paddingTop: 30}}>
                <div className="row">
                    <div className="col span-3-of-3">
                        <SafetyPosts data={this.state.data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SafetyRule;