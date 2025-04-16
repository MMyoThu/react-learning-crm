import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Button, Accordion } from 'react-bootstrap';

const CourseDetail = () => {
  const { id } = useParams();
  const [activeLesson, setActiveLesson] = useState(null);

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: 1,
    title: 'React Fundamentals',
    description: 'Learn the basics of React and build your first application.',
    image: 'https://via.placeholder.com/800x400',
    instructor: 'John Doe',
    duration: '8 weeks',
    level: 'Beginner',
    lessons: [
      {
        id: 1,
        title: 'Introduction to React',
        duration: '45 minutes',
        content: 'Learn about React basics and its core concepts.'
      },
      {
        id: 2,
        title: 'Components and Props',
        duration: '60 minutes',
        content: 'Understanding React components and how to use props.'
      },
      {
        id: 3,
        title: 'State and Lifecycle',
        duration: '75 minutes',
        content: 'Learn about React state management and component lifecycle.'
      }
    ]
  };

  return (
    <Container className="py-4">
      <Row>
        {/* Course Information */}
        <Col md={8}>
          <Card className="mb-4">
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
              <Card.Title className="display-4">{course.title}</Card.Title>
              <Card.Text className="lead">{course.description}</Card.Text>
              <div className="d-flex gap-3 mb-3">
                <span className="badge bg-primary">Level: {course.level}</span>
                <span className="badge bg-secondary">Duration: {course.duration}</span>
                <span className="badge bg-info">Instructor: {course.instructor}</span>
              </div>
              <Button variant="primary" size="lg">Enroll Now</Button>
            </Card.Body>
          </Card>

          {/* Course Content */}
          <Card>
            <Card.Header>
              <h3 className="mb-0">Course Content</h3>
            </Card.Header>
            <Card.Body>
              <Accordion>
                {course.lessons.map((lesson, index) => (
                  <Accordion.Item key={lesson.id} eventKey={index.toString()}>
                    <Accordion.Header>
                      <div className="d-flex justify-content-between w-100 me-3">
                        <span>{lesson.title}</span>
                        <span className="text-muted">{lesson.duration}</span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{lesson.content}</p>
                      <Button variant="outline-primary">Start Lesson</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card.Body>
          </Card>
        </Col>

        {/* Course Details Sidebar */}
        <Col md={4}>
          <Card>
            <Card.Header>
              <h4 className="mb-0">Course Details</h4>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Prerequisites:</strong> Basic knowledge of HTML, CSS, and JavaScript
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>What you'll learn:</strong>
                <ul className="mt-2">
                  <li>React fundamentals</li>
                  <li>Component-based architecture</li>
                  <li>State management</li>
                  <li>React hooks</li>
                  <li>Building real-world applications</li>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Includes:</strong>
                <ul className="mt-2">
                  <li>8 hours of video content</li>
                  <li>10 coding exercises</li>
                  <li>Downloadable resources</li>
                  <li>Certificate of completion</li>
                </ul>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetail; 