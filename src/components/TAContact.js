import React, { Component } from 'react';
import '../grid.css';
import TACard from './TAcard';
import '../Nanum.css';
import axios from '../axios-auth';

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
       },{
        name: '윤영록',
        email: 'mememolly@kaist.ac.kr',
        lab: '2881',
        
    },{
        name: '최혁준',
        email: 'royh0106@kaist.ac.kr',
        lab: '2875',
       
    },{
        name: '박산하',
        email: 'dbsk9310@kaist.ac.kr',
        lab: '2856',
        
    },{
        name: '소종호',
        email: 'kimsoun0107@kaist.ac.kr',
        lab: '2862',
       
    },{
        name: '박수완',
        email: 'kimsoun0107@kaist.ac.kr',
        lab: '2862',
        
    },{
        name: '김성종',
        email: 'kimsoun0107@kaist.ac.kr',
        lab: '2862',
    },
];



class TAContact extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

  componentWillMount() {
    const subject = this.props.subject;
    const route = `${subject}/contact/`;
    axios.get(route)
      .then((response) => {
        const result = JSON.parse(response.data);
        const data = result.map((ta) => {
          return {
            name: ta.fields.name,
            email: ta.fields.email,
            lab: ta.fields.phone,
          };
        });
        this.setState({
          data: data
        });
      })
  }

  render() {
    const card = this.state.data.map((item) => {
      return (
        <div className="col span-3-of-9">
            <TACard name={item.name} email={item.email} lab={item.lab} img={item.photo}/>
        </div>
      );
    });

    return (
      <div>
          <div className='section' style={{paddingBotton: "40px"}}>
              <div className='row' style={{paddingTop: '27px', fontFamily: "Nanum Square"}}>
                  <p style={{fontSize: "30px", fontWeight: '700'}}>
                      TA Info.
                  </p>
              </div>
              <div className='row'>
                  <div style={{fontSize: '17px', marginBottom: "25px"}}>
                      * Teaching assistants are members of chemistry department.<br/>
                      *TA's Office : Tel. 2893
                  </div>
              </div>
              <div className="row" style={{paddingLeft: '5%', paddingRight: '5%'}}>
                {card}
              </div>
          </div>
      </div>
    );
  }
}

export default TAContact;