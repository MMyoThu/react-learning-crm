import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Learn the basics of React and build your first application.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      description: 'Master JavaScript from basics to advanced concepts.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Complete guide to modern web development.',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4">Welcome to Learning Platform</h1>
              <p className="lead">Start your learning journey today with our comprehensive courses.</p>
              <Button variant="light" size="lg" as={Link} to="/courses">
                Browse Courses
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="/images/home.png"
                alt="Learning Platform"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Courses */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Courses</h2>
          <Row>
            {featuredCourses.map((course) => (
              <Col key={course.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Button variant="primary" as={Link} to={`/courses/${course.id}`}>
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={4} className="text-center mb-4">
              <i className="fas fa-laptop-code fa-3x mb-3 text-primary"></i>
              <h3>Interactive Learning</h3>
              <p>Engage with interactive content and hands-on exercises.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="fas fa-certificate fa-3x mb-3 text-primary"></i>
              <h3>Certification</h3>
              <p>Earn certificates upon course completion.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <i className="fas fa-users fa-3x mb-3 text-primary"></i>
              <h3>Community</h3>
              <p>Join a community of learners and experts.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home; 