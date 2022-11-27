import React from 'react';
import { Container } from 'react-bootstrap';

const Spinner = () => {
    return (
      <Container className='text-center p-5'>
        <Spinner animation="grow" />
      </Container>
    );
};

export default Spinner;