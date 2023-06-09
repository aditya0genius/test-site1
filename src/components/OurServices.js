import React, { useState } from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

function OurServices() {
    const [roomtype,setroomtype] = useState('');
  return (
    <div className='row container-fluid'>
        <div className='Venue-service'>
        <h2>We Provides Venues For </h2>
        <hr />
            
            <div className="flex-container">
                <img
                src="https://storage.googleapis.com/my-venue/banner%20images/myvenue_USP.jpeg"
                alt="BookWeddingVenues" height={'350px'} width={'200px'}
            />

            <Link  to={`/home/MarriageHall`}>
                <div>
                <Card

src="/wedding-venue.jpg"
title="Book Wedding Venues"
description="Make your wedding dream come true explore spacious venues around your town."
/>
                </div>
            
            
            </Link>
            
            <Link to='/home'>
            <Card
                src="/decorators.jpg"
                title="Book for Engagement"
                description="Make your moments beautiful with the magnificient decorations."
            />
            </Link>
            
            <Link to='/home'>
            <Card
                src="/birthdayParty_home.jpg"
                title="Birthday Parties"
                description="Clebrate your special day and leave everything to us."
            />
            </Link>
            
            <Link to='/home'>
            <Card
                src="/poolParty_home.jpg"
                title="Pool Party"
                description="Book your venue with the splashes of water to mistify your special day"
            />
            </Link>
        
            <Link to='/home'>
            <Card
                src="\collegeParty_home.jpg"
                title="College Party"
                description="Get the better deals at your nearby Venues for College Freshers/Farewell Party"
            />
            </Link>
            
            <Link to='/home'>
            <Card
                src="\KittyParty_home.jpg"
                title="Kitty Party"
                description="Get venues for small gathering starting from 25 people"
            />
           
            </Link>
           
            
            </div>
        </div>
        
            
        
        
       
        
    </div>
  )
}

export default OurServices