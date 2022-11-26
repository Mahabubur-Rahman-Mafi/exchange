import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const PorductDetails = () => {
    const product = useLoaderData()
    const {categorName, title, des, image, amount,  location, originalPrice, usagesTime} = product
    return (
        <Container>
            <h1>Hello</h1>
        </Container>
    );
};

export default PorductDetails;