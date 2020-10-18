import React from 'react';
import Card from 'react-bootstrap/Card';

import LandingCard from '../LandingCard/LandingCard'

const Home = () => {

    return (
        <Card style={{ flexFlow: 'row wrap', width: '100%'}}>
            <Card style={{ flexFlow: 'row wrap', width: '80%'}} >
                <LandingCard title="Tier List" content="This is a tier page card" link="/Tier"/>
                <LandingCard title="Characters" content="This is a character page card" link="/Characters"/>
                <LandingCard title="Home" content="This is a home page card" link="/"/>
            </Card>
            <Card style={{ flexFlow: 'column', width: '20%'}} >
                <LandingCard title="Ad" content="This is an Ad, lets get that money" link="/Porn"/> 
                <LandingCard title="Ad" content="This is an Ad, lets get that money" link="/Porn"/> 
                <LandingCard title="Ad" content="This is an Ad, lets get that money" link="/Porn"/> 
                <LandingCard title="Ad" content="This is an Ad, lets get that money" link="/Porn"/> 
            </Card>
        </Card>
    )
}

export default Home;    