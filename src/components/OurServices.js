import React from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

function OurServices() {
  return (
    <div className='container-fluid'>
        
        <h2>We Provides Venues For </h2>
        <hr />
            <Link to='/home'>
            <div className="flex-container">
            
            <Card
                src="/wedding-venue.jpg"
                title="Book Wedding Venues"
                description="Make your wedding dream come true explore spacious venues around your town."
            />
            <Card
                src="/decorators.jpg"
                title="Book for Engagement"
                description="Make your moments beautiful with the magnificient decorations."
            />
            <Card
                src="/birthdayParty_home.jpg"
                title="Birthday Parties"
                description="Clebrate your special day and leave everything to us."
            />
            <Card
                src="/poolParty_home.jpg"
                title="Pool Party"
                description="Book your venue with the splashes of water to mistify your special day"
            />
            <Card
                src="\collegeParty_home.jpg"
                title="College Party"
                description="Get the better deals at your nearby Venues for College Freshers/Farewell Party"
            />
            <Card
                src="\KittyParty_home.jpg"
                title="Kitty Party"
                description="Get venues for small gathering starting from 25 people"
            />
           
            
            </div>
            </Link>
            
        
        
       
        
    </div>
  )
}

export default OurServices