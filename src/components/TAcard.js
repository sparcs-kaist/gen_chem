import React, { Component } from 'react';
import '../grid.css';
import '../Nanum.css';

const imgstyle ={
    float : 'left',
    height:'110px',
    width:'110px',
    borderRadius:'42px',
    margin : '20px'
}

const card = {
    maxWidth: '420px',
    height : '150px',
    backgroundColor: '#DBDBDB',
    borderRadius: '24px',
    margin : 'auto'
}

class TACard extends Component {
    render() {
        return (
            <div style={card}>
                <img src={this.props.img} alt = "TA" style = {imgstyle}/>
                <div style = {{float : 'left', fontFamily : "Nanum Square", fontSize : "11pt"}}>
                    <div style = {{marginTop : '31.7px'}}>
                        <p style={{fontSize : "14pt", margin : "0px", fontWeight : "700"}}>
                            {this.props.name}
                        </p>
                        <p>
                            <span style={{fontWeight : "700"}}>E-mail</span> : {this.props.email}
                        </p>
                        <p>
                            <span style={{fontWeight : "700"}}>Call</span> : {this.props.call}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TACard;