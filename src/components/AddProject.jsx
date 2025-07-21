import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addProjectApi } from '../../Services/allApis';
import { addResponseContext } from '../ContextApi/Context';

function AddProject() {
    const [show, setShow] = useState(false);

    const [project, setproject] = useState({
        title: "", description: "", languages: "", gitrepo: "", demo: "", image: ""
    })
    const [preview, setpreview] = useState("")

    useEffect(() => {
        if (project.image) {
            setpreview(URL.createObjectURL(project.image))
        }
    }, [project.image])
    const {setAddResponse}=useContext(addResponseContext)

    const handleSubmit = async () => {
        console.log(project);
        const { title, description, languages, gitrepo, demo, image } = project
        if (!title || !description || !languages || !gitrepo || !demo || !image) {
            toast.warning("Enter all fields")
        } else {
            const response = await addProjectApi(project)
            if (response.status === 200) {
                toast.success("Project Added")
                setproject({
                    title: "", description: "", languages: "", gitrepo: "", demo: "", image: ""
                })
                setAddResponse(true)
                handleClose()
                setpreview("")
            }else{
                toast.error("Project not added")
            }
        }
    }

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
                                <input type="file" style={{ display: "none" }} id="ff" onChange={e => { setproject({ ...project, image: e.target.files[0] }) }} />
                                <img src={preview ? preview : "https://static.vecteezy.com/system/resources/previews/056/202/171/non_2x/add-image-or-photo-icon-vector.jpg"} className="img-fluid" alt='img' />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter title' className='form-control mb-3' onChange={e => { setproject({ ...project, title: e.target.value }) }} />
                            <input type="text" placeholder='Enter Descriptiom' className='form-control mb-3' onChange={e => { setproject({ ...project, description: e.target.value }) }} />
                            <input type="text" placeholder='Enter Languages used' className='form-control mb-3' onChange={e => { setproject({ ...project, languages: e.target.value }) }} />
                            <input type="text" placeholder='Enter Git Repo URL' className='form-control mb-3' onChange={e => { setproject({ ...project, gitrepo: e.target.value }) }} />
                            <input type="text" placeholder='Enter Demo URL' className='form-control mb-3' onChange={e => { setproject({ ...project, demo: e.target.value }) }} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject

