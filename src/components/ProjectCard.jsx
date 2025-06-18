import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function ProjectCard() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" onClick={handleShow} src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" />
                <Card.Body>
                    <Card.Title>Website</Card.Title>
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
                            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png" style={{width:"100%"}} alt="" />
                        </div>
                        <div className="col">
                            <h3>Project title</h3>
                            <p>
                                <span className='fw-bolder'>Description:</span>
                                Lorem,iandae repellendu modi eos ab necessitatibus blanditiis, ipsa quae expedita quo?
                            </p>
                            <p>
                                <span className='fw-bolder'>Languages:</span>
                                HTML,CSS,JS
                            </p>
                            <div className="d-flex justify-content-between">
                                <a href="">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="">
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
