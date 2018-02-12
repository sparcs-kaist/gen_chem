import React, { Component } from 'react';
import FileComponent from './FileComponent.js';
import axios from '../axios-auth';
import './Download.css';

function StructFile() {
    let type, name, url;
}

function File(type, name, url) {
    let file = new StructFile();
    file.type = type;
    file.name = name;
    file.url = url;
    return file;
}

function PushEmptyFile (array){
    let emptyFile = new File(null, null, null);
    for (let i=0; i<3; i++){
        array.push(emptyFile);
    }
}

function GetFiles (mediaURL, data){
    let fileTable = new Map();
    for (let i in data){
        let fileName, name, year, type, url, file;
        fileName = data[i].fields.file;
        year = data[i].fields.year;
        type = fileName.split ('.').slice (-1) [0];
        name = data[i].fields.name + '.' + type;
        url = "http://ssal.sparcs.org:17322" + mediaURL + fileName;
        file = new File (type, name, url);

        if (!fileTable.has (year))
            fileTable.set (year, []);
        fileTable.get (year).push (file);
    }
    return fileTable;
}

function OneYear(year, files){
    let OneYear = [];
    let fileList = [];

    OneYear.push (<div className = "col span-2-of-8"><h1 style={{marginTop: 0}}>{year}</h1></div>);
    for (let file of files){
        fileList.push(
            <div className = "col span-2-of-6">
                <FileComponent type={file.type} name={file.name} url={file.url}/>
            </div>
        )
    }
    OneYear.push (<div className = "col span-6-of-8">{fileList}</div>);

    return OneYear;
}

function AllYear (mediaURL, data){
    let fileMap = GetFiles (mediaURL, data);
    let AllYear = [];
    for (let [key, value] of fileMap){
        AllYear.push(
            <div className="row" style={{marginBottom: 96}}>{OneYear(key, value)}</div>
        );
    }

    return (<div className="section">{AllYear}</div>);
}

class Download extends Component {
    constructor (props) {
        super (props);
        this.state = {};
    }

    componentWillMount (){
        axios.get ('/ch101/download/')
            .then((response) => {
                this.setState({
                    mediaURL : response.data.media_url,
                    data : response.data.data,
                })
        });
    }

    render() {
        const { containerStyle } = styles;
        return (
            <div className="App" style={containerStyle}>
                { AllYear (this.state.mediaURL, this.state.data) }
            </div>
        );
    }
}


const styles = {
    containerStyle: {
        paddingTop: '54px',
        paddingBottom: '48px'
    }
};

export default Download;
