import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavDropdown } from 'react-bootstrap';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

export const NavBarVPES = () => {


  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(!show2);
  }
  const hideDropdown2 = e => {
    setShow2(false);
  }
  const [show3, setShow3] = useState(false);
  const showDropdown3 = (e) => {
    setShow3(!show3);
  }
  const hideDropdown3 = e => {
    setShow3(false);
  }

  useEffect(() => {
    const onScroll = () => {

      if (window.scrollY >= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className={scrolled ? "scrolled" : ""} expanded={expanded}>
      <Container className={scrolled ? "scrolleds" : ""}>
        <Navbar.Brand href="/" className="brand">
          <img  className="vpes-logo" src="https://res.cloudinary.com/ddy8u7ff2/image/upload/v1680694008/VishvasWebsite/hvktutgondilxrb1n9yc.png" alt="logo"></img>
          <h4><a href="/">VPES</a></h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={scrolled ? "nav-links nav-linksScrolled" : "nav-links"}>

            <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>

            <NavDropdown title="About Us" id="collasible-nav-dropdown" show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown} className="dropDown-Nav">
                
              <NavDropdown.Item onClick={() => setExpanded(false)}><Link to="/About">Company</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/StrengthPlant'>Plant</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/StrengthProcess'>Process</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/StrengthPeople'>People</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Products" id="collasible-nav-dropdown" show={show3}
              onMouseEnter={showDropdown3}
              onMouseLeave={hideDropdown3}>
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/Products'>Our Products </Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/TractionPower'> Traction Power Transformer</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/AutoTransformer'>AutoTransformer</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/Special'>Special Transformer</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="collasible-nav-dropdown" show={show2}
              onMouseEnter={showDropdown2}
              onMouseLeave={hideDropdown2}>
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/OurServices'>Our Services </Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/Repair'>Remanufacturing & Repairing </Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/POH'>POH</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => setExpanded(false)}><Link to='/EPC'>EPC</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" onClick={() => setExpanded(false)}><Link to='/Gurukul' >Gurukul</Link> </Nav.Link>
            <Nav.Link href="" onClick={() => setExpanded(false)}><Link to='/ContactUs'>Contact Us</Link></Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

