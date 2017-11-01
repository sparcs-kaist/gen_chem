import React, { Component } from 'react';
import '../grid.css';
import TACard from './TAcard';

const TAs = [
    {
        name : 'Happy Girl',
        email : 'happygirl@gmail.com',
        call : '01012345678',
        photo : 'http://www.endpoint.pt/portfolio/content/pictures3/happygirl.jpg'
    },{
        name : 'Horse',
        email : 'handsomehorse@gmail.com',
        call : '01012345678',
        photo : 'https://static.pexels.com/photos/15243/horse-animal.jpg'
    },{
        name : 'Nyan Cat',
        email : 'naynnyannya@gmail.com',
        call : '01012345678',
        photo : 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
    },{
        name : 'Otaku',
        email : 'honmono@gmail.com',
        call : '01012345678',
        photo : 'http://img1.ak.crunchyroll.com/i/spire1/078b130a00cedbcd151848ef05d617311499129068_large.png'
    },{
        name : 'Happy Girl',
        email : 'happygirl@gmail.com',
        call : '01012345678',
        photo : 'http://www.endpoint.pt/portfolio/content/pictures3/happygirl.jpg'
    },{
        name : 'Horse',
        email : 'handsomehorse@gmail.com',
        call : '01012345678',
        photo : 'https://static.pexels.com/photos/15243/horse-animal.jpg'
    },{
        name : 'Nyan Cat',
        email : 'naynnyannya@gmail.com',
        call : '01012345678',
        photo : 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
    },{
        name : 'Otaku',
        email : 'honmono@gmail.com',
        call : '01012345678',
        photo : 'http://img1.ak.crunchyroll.com/i/spire1/078b130a00cedbcd151848ef05d617311499129068_large.png'
    },{
        name : 'Happy Girl',
        email : 'happygirl@gmail.com',
        call : '01012345678',
        photo : 'http://www.endpoint.pt/portfolio/content/pictures3/happygirl.jpg'
    },{
        name : 'Horse',
        email : 'handsomehorse@gmail.com',
        call : '01012345678',
        photo : 'https://static.pexels.com/photos/15243/horse-animal.jpg'
    },{
        name : 'Nyan Cat',
        email : 'naynnyannya@gmail.com',
        call : '01012345678',
        photo : 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
    },{
        name : 'Otaku',
        email : 'honmono@gmail.com',
        call : '01012345678',
        photo : 'http://img1.ak.crunchyroll.com/i/spire1/078b130a00cedbcd151848ef05d617311499129068_large.png'
    },{
        name : 'Happy Girl',
        email : 'happygirl@gmail.com',
        call : '01012345678',
        photo : 'http://www.endpoint.pt/portfolio/content/pictures3/happygirl.jpg'
    },{
        name : 'Horse',
        email : 'handsomehorse@gmail.com',
        call : '01012345678',
        photo : 'https://static.pexels.com/photos/15243/horse-animal.jpg'
    },{
        name : 'Nyan Cat',
        email : 'naynnyannya@gmail.com',
        call : '01012345678',
        photo : 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
    },{
        name : 'Otaku',
        email : 'honmono@gmail.com',
        call : '01012345678',
        photo : 'http://img1.ak.crunchyroll.com/i/spire1/078b130a00cedbcd151848ef05d617311499129068_large.png'
    },{
        name : 'Happy Girl',
        email : 'happygirl@gmail.com',
        call : '01012345678',
        photo : 'http://www.endpoint.pt/portfolio/content/pictures3/happygirl.jpg'
    },{
        name : 'Horse',
        email : 'handsomehorse@gmail.com',
        call : '01012345678',
        photo : 'https://static.pexels.com/photos/15243/horse-animal.jpg'
    },{
        name : 'Nyan Cat',
        email : 'naynnyannya@gmail.com',
        call : '01012345678',
        photo : 'https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
    },{
        name : 'Otaku',
        email : 'honmono@gmail.com',
        call : '01012345678',
        photo : 'http://img1.ak.crunchyroll.com/i/spire1/078b130a00cedbcd151848ef05d617311499129068_large.png'
    }

];

class TAContact extends Component {
    render() {

        const card = TAs.map((item) => {
            return (
                <div className= "col span-3-of-9">
                    <TACard name={item.name} email={item.email} call={item.call} img={item.photo}/>
                </div>
            );
        })

        return (
            <div className = 'section'>
                <div className= "row" style={{paddingRight : "90px", paddingLeft : "90px"}}>
                    {card}
                </div>
            </div>
        );
    }
}

export default TAContact;