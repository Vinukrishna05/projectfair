import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../ContextApi/Context';
import { use, useContext } from 'react';

function Header() {

    const nav=useNavigate()

    const {setAuthStatus}=useContext(authContext)

    const handleLogout=()=>{
        setAuthStatus(false)
        nav('/')
        sessionStorage.clear()
    }

    return (
        <>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fa-solid fa-diagram-project"></i>{' '}
                        projectfair
                    </Navbar.Brand>
                    <div>
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
