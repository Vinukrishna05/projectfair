import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { baseURL } from '../../Services/baseURL';


function ProjectCard({project}) {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" onClick={handleShow} src={`${baseURL}projectimage/${project.image}`} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <img src={`${baseURL}projectimage/${project.image}`} style={{width:"100%"}} alt="" />
                        </div>
                        <div className="col">
                            <h3>{project.title}</h3>
                            <p>
                                <span className='fw-bolder'>Description:</span>
                                {project.description}
                            </p>
                            <p>
                                <span className='fw-bolder'>Languages:</span>
                                {project.languages}
                            </p>
                            <div className="d-flex justify-content-between">
                                <a href={project.gitrepo}>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href={project.demo}>
                                    <i className="fa-solid fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectCard
