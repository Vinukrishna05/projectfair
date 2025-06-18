import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div onClick={handleShow} className="btn btn-success">Add Project</div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="ff">
                                <input type="file" style={{ display: "none" }} id="ff" />
                                <img className='w-100' src="https://static.vecteezy.com/system/resources/previews/056/202/171/non_2x/add-image-or-photo-icon-vector.jpg" alt="img-fluid" />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter title' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Descriptiom' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Languages used' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Git Repo URL' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Demo URL' className='form-control mb-3' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject

