// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const { email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       localStorage.setItem('token', res.data.token);
//       navigate('/HomePage1');
//     } catch (err) {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6} lg={4}>
//           <h2 className="text-center mb-4">Login</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={onSubmit}>
//             <Form.Group controlId="formEmail" className="mb-3">
//               <Form.Label>Email:</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 name="email" 
//                 value={email} 
//                 onChange={onChange} 
//                 placeholder="Enter your email" 
//                 required 
//               />
//             </Form.Group>
//             <Form.Group controlId="formPassword" className="mb-3">
//               <Form.Label>Password:</Form.Label>
//               <Form.Control 
//                 type="password" 
//                 name="password" 
//                 value={password} 
//                 onChange={onChange} 
//                 placeholder="Enter your password" 
//                 required 
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100">
//               Login
//             </Button>
//           </Form>
//           <div className="mt-3 text-center">
//             <a href="/forgot-password" className="d-block mb-2">Forgot Password?</a>
//             <a href="/signup">Sign Up</a>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default LoginPage;
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/HomePage1');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const onAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/admin-login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={onSubmit}>
              Login
            </Button>
            <Button variant="secondary" type="submit" onClick={onAdminLogin} className="ml-2">
              Admin Login
            </Button>
          </Form>
          <div className="mt-3 text-center">
            <a href="/forgot-password" className="d-block mb-2">Forgot Password?</a>
            <a href="/signup">Sign Up</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;