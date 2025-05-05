import React, { useReducer } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Table } from 'react-bootstrap';

const initialState = {
  showModal: false,
  courses: [
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
  ],
  formData: {
    id: null,
    title: '',
    description: '',
    category: '',
    instructor: ''
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        showModal: true,
        formData: action.payload || initialState.formData
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        showModal: false,
        formData: initialState.formData
      };
    case 'UPDATE_FORM':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };
    case 'SAVE_COURSE':
      const updatedCourses = state.formData.id
        ? state.courses.map(course =>
            course.id === state.formData.id ? state.formData : course
          )
        : [...state.courses, { ...state.formData, id: Date.now() }];
      return {
        ...state,
        courses: updatedCourses,
        showModal: false,
        formData: initialState.formData
      };
    case 'DELETE_COURSE':
      return {
        ...state,
        courses: state.courses.filter(course => course.id !== action.payload)
      };
    default:
      return state;
  }
}

const AdminDashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FORM', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SAVE_COURSE' });
  };

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1>Admin Dashboard</h1>
          <Button variant="primary" onClick={() => dispatch({ type: 'SHOW_MODAL' })}>
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
              {state.courses.map(course => (
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
                      onClick={() => dispatch({ type: 'SHOW_MODAL', payload: course })}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => dispatch({ type: 'DELETE_COURSE', payload: course.id })}
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
      <Modal show={state.showModal} onHide={() => dispatch({ type: 'HIDE_MODAL' })}>
        <Modal.Header closeButton>
          <Modal.Title>{state.formData.id ? 'Edit Course' : 'Add New Course'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={state.formData.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={state.formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={state.formData.category}
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
                value={state.formData.instructor}
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
