import React from "react";
import { Accordion, Container } from "react-bootstrap";
import BreadHeader from "../Shared/BreadHeader/BreadHeader";

const Faq = () => {
  return (
    <div>
      <BreadHeader title={`FAQ`}></BreadHeader>

      <Container className="my-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What do courses include?</Accordion.Header>
            <Accordion.Body>
              Each course is created, owned and managed by the instructor(s).
              The foundation of each course are its lectures, which can include
              videos, slides, and text. In addition, instructors can add
              resources and various types of practice activities, as a way to
              enhance the learning experience of students.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I take a coursee</Accordion.Header>
            <Accordion.Body>
              courses are entirely on-demand and they can be accessed from
              several different devices and platforms, including a desktop,
              laptop, and our mobile app. After you enroll in a course, you can
              access it by clicking on the course link you will receive in your
              confirmation email (provided you’re logged into your account). You
              can also begin the course by logging in and navigating to your My
              learning page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Do I have to start my course at a certain time? And how long do I
              have to complete it?
            </Accordion.Header>
            <Accordion.Body>
              There are no deadlines to begin or complete a course. Learn more
              about our Lifetime Access policy.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Is an accredited institution? Do I receive anything after I
              complete a course?
            </Accordion.Header>
            <Accordion.Body>
              While is not an accredited institution, we offer skills-based
              courses taught by real-world experts in their field. Every
              approved, paid course features a certificate of completion to
              document your accomplishment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Is there any way to preview a course?
            </Accordion.Header>
            <Accordion.Body>
              Yes! Learn how to preview a course, and review key information
              about it. This article outlines how you can search ’s ever-growing
              library, and find courses you’re interested in taking.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How can I pay for a course?</Accordion.Header>
            <Accordion.Body>
              supports several different payment methods, depending on your
              account country and location.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
