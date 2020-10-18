import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const LandingCard = ({title, content, link}) => {

    return (
        <Card style={{ width: '18rem', height: '18rem', margin: '2rem'}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button href={link} variant="primary">View</Button>
            </Card.Body>
        </Card>
    )
}

export default LandingCard;