import './Header.scss';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Form, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Article Management app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar className="mr-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/post-article">Post Article</Link>
            <Link className="nav-link" to="/about-us">About Us</Link>
          </Navbar>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Link className="btn btn-outline-success" to="/login">Login</Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
