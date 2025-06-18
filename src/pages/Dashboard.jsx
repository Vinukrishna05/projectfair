import React from 'react'
import Header from '../components/Header'
import AddProject from '../components/AddProject'
import Profile from '../components/Profile'


function Dashboard() {
  return (
    <>
      <Header/>
      <div className="container-fluid" style={{minHeight:"65vh"}}>
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col-9">
            <AddProject/>
            <div className="w-100 border border-3 border-light p-2 mt-4">
              <div className="m-3 border border-2 border-warning p-2 d-flex justify-content-between">
                <h4>Project title</h4>
                <div>
                  <a href="" className='btn me-3 p-auto'>
                    <i className="fa-brands fa-square-github fa-xl text-info"></i>
                  </a>
                  <button className="btn me-3">
                    <i className="fa-solid fa-pen-to-square fa-xl text-warning"></i>
                  </button>
                  <button className="btn me-3">
                    <i className="fa-solid fa-trash fa-xl text-danger"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <Profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard