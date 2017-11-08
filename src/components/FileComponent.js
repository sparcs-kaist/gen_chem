import React, { Component } from 'react';
import './FileComponent.css'
import pdfIcon from './pdfIcon.png'

class FileComponent extends Component {
    constructor(props){
        super(props);
        this.type=this.props.type;
        this.name=this.props.name;
        this.url=this.props.url;
    }
    render() {
        if(this.type != null) {
            return (
                <div className="file">
                    <a href = {this.url}>
                        <img className="fileIcon" src={pdfIcon}/>
                        <p className="fileName">{this.name}</p>
                    </a>
                </div>
            );
        }
        else{
            return(
                <div className="fileEmpty">
                </div>
            );
        }
    }
}

export default FileComponent;