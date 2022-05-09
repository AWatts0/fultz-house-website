import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import "./navbar.css";

function MyNavbar() {

    let scrollToTop = function() {
        window.scrollTo(0, 0);
    };

    return(

        <Navbar className="navbar py-4 mb-3" expand="lg" variant="light" sticky="top"  >
            <Container fluid>
                <Navbar.Brand className="navbar-brand" as={Link} to="">Fultz House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="the-nav me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavDropdown className="dropdown" menuVariant="light" title="About" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">About Us</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Facility</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Governance</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Careers</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Archives & Collections" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/history" >Our Community History</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/notablepeople">Notable People</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Geneology</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Brochures</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Media" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/photo">Photos</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Videos</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Presentations</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Events" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Upcoming Events</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Rentals</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Programming" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Programming</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Kids Page</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown menuVariant="light" title="Contribute" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Volunteers</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Donate</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="" className="nav-links">
                            Shop
                    </Nav.Link>
                    <NavDropdown menuVariant="light" title="Contact" id="navbarScrollingDropdown">
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="/contact">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item className="nav-drop-item" onClick={scrollToTop} as={Link} to="">Community Links</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
          )
      }

export default MyNavbar;