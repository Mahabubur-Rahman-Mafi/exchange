import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
    return (
        <Container className='w-50 mb-5'>
            <h2 className='my-4 text-center'>FAQ</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How Can I order my items?</Accordion.Header>
            <Accordion.Body>
              In product section you will see a booking button. After a submit the form you will fixed a meeting. After meeting and you check list you can order your product.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How can I payment?</Accordion.Header>
            <Accordion.Body>
              You can payment any type of bank bank or mobile banking you want. You can use any payment gateway to payment the site.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
};

export default FAQ;