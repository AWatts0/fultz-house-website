import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import "./navbar.css";

function MyNavbar() {
    return(

        <Navbar className="navbar py-4 mb-3" expand="lg" variant="dark" >
            <Container fluid>
                <Navbar.Brand className="navbar-brand" as={Link} to="">Fultz House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="the-nav me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavDropdown className="dropdown" menuVariant="dark" title="About" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="">About Us</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Facility</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Governance</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Careers</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="dark" title="Archives & Collections" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/history" >Our Community History</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/notablepeople">Notable People</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Geneology</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Brochures</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="dark" title="Media" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/photo">Photos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Videos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Presentations</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="dark" title="Events" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="">Upcoming Events</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Rentals</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="dark" title="Programming" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="">Programming</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Kids Page</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="dark" title="Contribute" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="">Volunteers</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Donate</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="" className="nav-links">
                            Shop
                    </Nav.Link>
                    <NavDropdown menuVariant="dark" title="Contact" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="">Community Links</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
          )
      }

export default MyNavbar;