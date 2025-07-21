import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { allProjectApi } from '../../Services/allApis'

function Projects() {

  const [projectList, setprojectList] = useState([])
  const [dataList,setDataList]=useState([])

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      getData()
    }
  }, [])

  const getData = async () => {
    const response = await allProjectApi()
    console.log(response);
    if (response.status == 200) {
      setprojectList(response.data)
      setDataList(response.data)
    }
  }

  const handleSearch=(val)=>{
    const data=dataList.filter(item=>(item.languages.toLowerCase().includes(val.toLowerCase())))
    console.log(data);
    setprojectList(data)
  }


  return (
    <>
      <Header />
      <div className='container-fluid ' style={{ minHeight: "70vh" }}>
        <div className="d-flex justify-content-between my-5">
          <h1>All Projects</h1>
          <input type="search" onChange={e=>{handleSearch(e.target.value)}} placeholder='Search with Language' className='form-control w-25' />
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          {
            projectList.length > 0 ?
              <>
                {projectList.map(item => (
                  <ProjectCard project={item} />
                ))}
              </> :
              <h3>NO projects available</h3>
          }
        </div>
      </div>
    </>
  )
}

export default Projects
