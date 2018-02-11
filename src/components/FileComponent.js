import React, { Component } from 'react';
import './FileComponent.css'
import pdfIcon from './img/pdfIcon.png'
import docIcon from './img/docIcon.png'
import gifIcon from './img/gifIcon.png'
import jpgIcon from './img/jpgIcon.png'
import pngIcon from './img/pngIcon.png'
import txtIcon from './img/txtIcon.png'
import xlsIcon from './img/xlsIcon.png'
import aviIcon from './img/aviIcon.png'
import movIcon from './img/movIcon.png'
import anotherIcon from './img/anotherIcon.png'

function getIcon (type){
    let icons = {'pdf' : pdfIcon, 'doc' : docIcon, 'gif' : gifIcon,
                'jpg' : jpgIcon, 'png' : pngIcon, 'txt' : txtIcon,
                'xls' : xlsIcon, 'avi' : aviIcon, 'mov' : movIcon,
                'docx' : docIcon, 'xlsx' : xlsIcon};

    if (icons.hasOwnProperty (type))
        return icons [type];
    else
        return anotherIcon;
}

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
                        <img className="fileIcon" src={getIcon (this.type)}/>
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