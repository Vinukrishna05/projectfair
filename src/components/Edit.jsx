import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { baseURL } from '../../Services/baseURL';
import { toast } from 'react-toastify';
import { editProjectApi } from '../../Services/allApis';
import { editResponseContext } from '../ContextApi/Context';


function Edit({project}) {
    const [show, setShow] = useState(false);
    const [newproject, setnewproject]=useState(project)
    const [preview,setpreview]=useState("")


    useEffect(()=>{
        if(newproject.image.type){
            setpreview(URL.createObjectURL(newproject.image))
        }else{
            setpreview("")
        }
    },[newproject.image.type])
    
    const {setEditResponse}=useContext(editResponseContext)

    const handleEdit=async()=>{
        console.log(newproject)
        const {title,description,languages,demo,gitrepo,image}=newproject
        if(!title||!description||!languages||!demo||!gitrepo||!image){
            toast.warning("Enter Valid Inputs")
        }else{
            if(image.type){
                const header={
                    "Content-type":"multipart/form-data",
                    "Authorization":`Token ${sessionStorage.getItem('token')}`
                }
                const response=await editProjectApi(project._id,header,newproject)
                if(response.status==200){
                    toast.success("Project Updated!!")
                    setEditResponse(response)
                    setpreview("")
                    handleClose()
                }else{
                    toast.error("Something went wrong")
                    console.log(response);
                }
            }else{
                const header={
                    "Content-type":"application/json",
                    "Authorization":`Token ${sessionStorage.getItem('token')}`
                }
                const response=await editProjectApi(project._id,header,newproject)
                if(response.status==200){
                    toast.success("Project Updated!!")
                    setEditResponse(response)
                    setpreview("")
                    handleClose()
                }else{
                    toast.error("Something went wrong")
                    console.log(response);
                }
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)
        console.log(project);
        
    };
    return (
        <>
            <button className="btn me-3" onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square fa-xl text-warning"></i>
            </button>

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
                                <input type="file" style={{ display: "none" }} id="ff" onChange={e=>{setnewproject({...newproject,image:e.target.files[0]})}}/>
                                <img src={preview?preview:`${baseURL}projectimage/${project.image}`} className="img-fluid" alt='img' />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter title' onChange={e=>{setnewproject({...newproject,title:e.target.value})}} defaultValue={project.title} className='form-control mb-3'  />
                            <input type="text" placeholder='Enter Descriptiom' onChange={e=>{setnewproject({...newproject,description:e.target.value})}} defaultValue={project.description} className='form-control mb-3'  />
                            <input type="text" placeholder='Enter Languages used'onChange={e=>{setnewproject({...newproject,languages:e.target.value})}}  defaultValue={project.languages} className='form-control mb-3'  />
                            <input type="text" placeholder='Enter Git Repo URL' onChange={e=>{setnewproject({...newproject,gitrepo:e.target.value})}} defaultValue={project.gitrepo} className='form-control mb-3'  />
                            <input type="text" placeholder='Enter Demo URL' onChange={e=>{setnewproject({...newproject,demo:e.target.value})}} defaultValue={project.demo}  className='form-control mb-3'  />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleEdit} >Edit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit