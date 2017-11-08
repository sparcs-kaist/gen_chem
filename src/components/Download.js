import React, { Component } from 'react';
import FileComponent from './FileComponent.js';
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

function GetFiles(){
    let fileTable = new Map();
    let array1 = [], array2 = [], array3 = [], array4 = [];
    let file1 = new File("pdf","Spring - 101.pdf","aaa");
    let file2 = new File("pdf","Summer - 10dsafasdfasdfasdff1.pdf","aaa");
    let file3 = new File("pdf","Fall - 101.pdf","aaa");
    let file4 = new File("pdf","Winter - 101.pdf","aaa");
    let file5 = new File("pdf","Spring - 101.pdf","aaa");
    let file6 = new File("pdf","Summer - 101.pdf","aaa");
    array1.push(file1);
    array1.push(file2);
    array1.push(file3);
    array1.push(file4);
    array2.push(file5);
    array2.push(file6);
    array2.push(file6);
    array3.push(file1);
    array3.push(file2);
    array4.push(file1);
    PushEmptyFile(array1);
    PushEmptyFile(array2);
    PushEmptyFile(array3);
    PushEmptyFile(array4);
    fileTable.set(2017,array1);
    fileTable.set(2016,array2);
    fileTable.set(2014,array3);
    fileTable.set(2012,array4);
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

function AllYear(){
    let fileMap = GetFiles();
    let AllYear = [];

    for (let [key, value] of fileMap){
        AllYear.push(
            <div className="row">{OneYear(key, value)}</div>
        );
    }

    return (<div className="section">{AllYear}</div>);
}

class Download extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <div className="App" style={containerStyle}>
                {AllYear()}
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
