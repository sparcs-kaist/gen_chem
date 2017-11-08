import React, { Component } from 'react';
import '../grid.css';
import TACard from './TAcard';
import '../Nanum.css';

const TAs = [
    {
        name: '이지민',
        email: 'leejimin@kaist.ac.kr',
        lab: '2879',
        photo: 'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400'
    },
    {
        name: '장영부',
        email: 'wkd2102@kaist.ac.kr',
        lab: '2887',
        photo: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
    },{
        name: '윤영록',
        email: 'mememolly@kaist.ac.kr',
        lab: '2881',
        photo: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
    },{
        name: '최혁준',
        email: 'royh0106@kaist.ac.kr',
        lab: '2875',
        photo: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
    },{
        name: '박산하',
        email: 'dbsk9310@kaist.ac.kr',
        lab: '2856',
        photo: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
    },{
        name: '소종호',
        email: 'kimsoun0107@kaist.ac.kr',
        lab: '2862',
        photo: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
    },{
        name: '박수완',
        email: 'kimsoun0107@kaist.ac.kr',
        lab: '2862',
        photo: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
    },{
        name: '김성종',
        email: 'kimsoun0107@kaist.ac.kr',
        lab: '2862',
        photo: 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png'
    },
];



class TAContact extends Component {
    render() {

        const card = TAs.map((item) => {
            return (
                <div className= "col span-3-of-9">
                    <TACard name={item.name} email={item.email} lab={item.lab} img={item.photo}/>
                </div>
            );
        })

        const head = {
            width : '100%',
            paddingLeft : '3%',
            fontFamily : 'Nanum Square'
        }

        return (
            <div>
                <div className = 'section' style = {{paddingLeft:'20px', paddingRight:'20px'}}>
                    <div style = {head}>
                        <div>
                            <p style={{fontSize : "30px", fontWeight : '700'}}>
                                TA Info.
                            </p>
                        </div>
                        <div style = {{fontSize : '17px0', marginBottom : "20px", lineHeight : '150%'}}>
                                * Teaching assistants are members of chemistry department.<br/>
                                *TA's Office : Tel. 2893
                        </div>
                    </div>
                    <div className= "row" style = {{paddingLeft : '5px', paddingRight:"5px"}}>
                        {card}
                    </div>
                </div>
            </div>
        );
    }
}

export default TAContact;