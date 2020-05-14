import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../Assets/logo.svg'
import Leaderboard from '../Assets/leaderboard.svg'
import { NavRight } from '../Assets/style'
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <Navbar onToggle={props.handleNavExpand} expanded={props.navExpanded} expand="xl" className={`mainMenu ${props.activeClass}`} fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt={'logo'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey={'/home'}>
                        <Nav.Link as={Link} to="/home">ONLINE COURSES</Nav.Link>
                        <Nav.Link as={Link} to="/courses">OFFLINE CAMPS</Nav.Link>
                        <Nav.Link as={Link} to="/home">REFER & EARN</Nav.Link>
                    </Nav>
                    <NavRight>
                        <a href="/#"><img src={Leaderboard} alt={'Leaderboard'} /></a>
                        <Button variant="primary">FREE TRIAL</Button>
                        <Button variant="primary">LOG IN</Button>
                    </NavRight>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default withRouter(Header);