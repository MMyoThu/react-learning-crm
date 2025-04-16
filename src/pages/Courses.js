import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Learn the basics of React and build your first application.',
      category: 'frontend',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      description: 'Master JavaScript from basics to advanced concepts.',
      category: 'frontend',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      description: 'Build scalable backend applications with Node.js.',
      category: 'backend',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Learn database design principles and SQL.',
      category: 'database',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || course.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <h1 className="text-center my-4">Our Courses</h1>
      
      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">Database</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Courses Grid */}
      <Row>
        {filteredCourses.map((course) => (
          <Col key={course.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="primary" as={Link} to={`/courses/${course.id}`}>
                    View Course
                  </Button>
                  <span className="badge bg-secondary">{course.category}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* No Results Message */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-5">
          <h3>No courses found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </Container>
  );
};

export default Courses; 