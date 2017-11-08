import React, { Component } from 'react';
import '../grid.css';
import '../Nanum.css';

const imgstyle ={
    height:'45px',
    width:'45px',
    borderRadius:'25px',
    marginLeft: '17px',
    marginTop: '17px',
    float : 'left'
}

const card = {
    maxWidth: '350px',
    height : '140px',
    backgroundColor: '#EBEBEB',
    borderRadius: '30px',
    margin : 'auto',
    marginBottom : "20px"
}

const title = {
    maxWidth : '300px',
    height : '50px',
    fontFamily : "Nanum Square",
    fontSize : "15pt",
    fontWeight : "700",
    paddingTop : '29px',
    marginLeft: '75px'
}

const info = {
    clear : 'both',
    fontFamily : "Nanum Square",
    fontSize : "11pt",
    marginLeft : '25px'
}

class TACard extends Component {
    render() {
        return (
            <div style={card}>
                <img src={this.props.img} alt = "TA" style = {imgstyle}/>
                <div style={title}>
                    {this.props.name}
                </div>
                <div style = {info}>
                    <div style={{width : '300px', height : '15px'}}>
                        <span style={{fontWeight : "700"}}>E-mail</span> : {this.props.email}
                    </div>
                    <div style={{marginTop : '7px', width : "300px",height : '15px'}}>
                        <span style={{fontWeight : "700"}}>Lab</span> : {this.props.lab}
                    </div>
                </div>
            </div>
        );
    }
}

TACard.defaultProps = {
    img : 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
}

export default TACard;