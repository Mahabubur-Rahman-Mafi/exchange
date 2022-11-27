import React from 'react';
import Card from "react-bootstrap/Card";

const AdCard = ({ add }) => {
    
    return (
      <div className='text-center fs-4 fw-semibold mb-4'>
        <Card>
          <Card.Img variant="top" src={add.image} />
          <Card.Body>
            {add.title}
          </Card.Body>
        </Card>
      </div>
    );
};

export default AdCard;