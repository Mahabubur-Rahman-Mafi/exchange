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
            <Accordion.Header>How can I do payment?</Accordion.Header>
            <Accordion.Body>
              You can payment any type of bank bank or mobile banking you want. You can use any payment gateway to payment the site.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>It it trustable?</Accordion.Header>
            <Accordion.Body>
              Yes. You can believe it without any hesitation. You can also see the verified seller also here.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>It there any return policy?</Accordion.Header>
            <Accordion.Body>
              At present , there are no return policy. You have to checked your product before purchase. Once you purchase the product you can return it.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How can I manage my meeting</Accordion.Header>
            <Accordion.Body>
              You meeting time and date and location in you hand. You can placed a meeting whenever you want.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
};

export default FAQ;