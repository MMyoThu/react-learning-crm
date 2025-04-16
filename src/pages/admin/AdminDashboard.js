import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Table } from 'react-bootstrap';

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Learn the basics of React and build your first application.',
      category: 'frontend',
      instructor: 'John Doe'
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      description: 'Master JavaScript from basics to advanced concepts.',
      category: 'frontend',
      instructor: 'Jane Smith'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    instructor: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: courses.length + 1,
      ...formData
    };
    setCourses([...courses, newCourse]);
    setShowModal(false);
    setFormData({
      title: '',
      description: '',
      category: '',
      instructor: ''
    });
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleEdit = (course) => {
    setFormData(course);
    setShowModal(true);
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1>Admin Dashboard</h1>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add New Course
          </Button>
        </Col>
      </Row>

      {/* Courses Table */}
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Instructor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.category}</td>
                  <td>{course.instructor}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(course)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(course.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Add/Edit Course Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Category</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="database">Database</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Course
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminDashboard; 