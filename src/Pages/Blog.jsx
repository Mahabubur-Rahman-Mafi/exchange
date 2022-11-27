import React from 'react';
import { Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Blog = () => {
    return (
      <Container className="mt-5 w-75 mx-auto">
        <Card className="mb-4">
          <CardHeader>
            <Card.Title>
              What are the different ways to manage a state in a React
              application?
            </Card.Title>
          </CardHeader>
          <Card.Body>
            <Card.Text>
              There are four main types of state you need to properly manage in
              your React apps: Local state, Global state, Server state, URL
              state. There are undoubtedly more pieces of state that we could
              identify, but these are the major categories worth focusing on for
              most applications you build.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <Card.Title>How does prototypical inheritance work?</Card.Title>
          </CardHeader>
          <Card.Body>
            <Card.Text>
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <Card.Title>
              What is a unit test? Why should we write unit tests?
            </Card.Title>
          </CardHeader>
          <Card.Body>
            <Card.Text>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <Card.Title>React vs. Angular vs. Vue?</Card.Title>
          </CardHeader>
          <Card.Body>
            <Card.Text>
              Just a couple of years ago, developers were mainly debating
              whether they should be using Angular vs React for their projects.
              But over the course of the last couple of years, we’ve seen a
              growth of interest in a third player called Vue.js. If you are a
              developer starting out on a project and cannot decide on which
              JavaScript framework to use, this guide should help you make a
              decision. Here we’ll cover various aspects of Angular, Vue, and
              React to see how they suit your needs.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
};

export default Blog;