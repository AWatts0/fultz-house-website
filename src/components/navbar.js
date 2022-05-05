import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import "./navbar.css";

function MyNavbar() {
    return(

        <Navbar className="navbar" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">Fultz House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavDropdown className="dropdown" title="About" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Facility</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Governance</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Careers</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Archives & Collections" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Our Community History</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Notable People</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Geneology</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Brochures</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Media" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Photos</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Videos</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Presentations</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Events" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Upcoming Events</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Rentals</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Programming" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Programming</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Kids Page</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Contribute" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Volunteers</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Donate</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/about" className="nav-links">
                            Shop
                    </Nav.Link>
                    <NavDropdown title="Contact" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Community Links</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
          )
      }

export default MyNavbar