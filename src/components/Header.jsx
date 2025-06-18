import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-diagram-project"></i>{' '}
                        projectfair
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
