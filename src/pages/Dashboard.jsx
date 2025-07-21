import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import AddProject from '../components/AddProject'
import Profile from '../components/Profile'
import { deleteProjectApi, userProjectsApi } from '../../Services/allApis'
import { toast } from 'react-toastify'
import Edit from '../components/Edit'
import { addResponseContext, editResponseContext } from '../ContextApi/Context'


function Dashboard() {

  const [user, setuser] = useState("")
  const [projects, setprojects] = useState([])

  const {addResponse}=useContext(addResponseContext)
  const {editResponse}=useContext(editResponseContext)

  useEffect(() => {
    if (sessionStorage.getItem("userData")) {
      setuser(JSON.parse(sessionStorage.getItem("userData")))
      getData()
    }
  }, [addResponse,editResponse])

  const getData = async () => {
    const response = await userProjectsApi()
    // console.log(response);
    if (response.status === 200) {
      setprojects(response.data)
    }
  }
  const handleDelete=async(id)=>{
    const response=await deleteProjectApi(id)
    if(response.status===200){
      getData()
    }else{
      toast.warning("Something went wrong")
      console.log(response);
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid" style={{ minHeight: "65vh" }}>
        <h2>Dashboard</h2>
        <h4>Welcome to ProjectFair,<span className='text-capitalize text-warning'> {user.username}</span></h4>
        <div className="row">
          <div className="col-9">
            <AddProject />
            <div className="w-100 border border-3 border-light p-2 mt-4">
              {
                projects.length > 0 ?
                  <>
                    {
                      projects.map(item => (
                        <div className="m-3 border border-2 border-warning p-2 d-flex justify-content-between">
                          <h4>{item.title}</h4>
                          <div>
                            <a href={item.gitrepo} target='_blank' className='btn me-3 p-auto'>
                              <i className="fa-brands fa-square-github fa-xl text-info"></i>
                            </a>
                             <Edit project={item}/>
                            <button className="btn me-3" onClick={()=>{handleDelete(item._id)}}>
                              <i className="fa-solid fa-trash fa-xl text-danger"></i>
                            </button>
                          </div>
                        </div>
                      ))
                    }
                  </>
                  :
                  <h3 className='text-center text-danger'>No projects Added yet</h3>
              }

            </div>
          </div>
          <div className="col-3">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard