import React, { useEffect, useState,useContext } from 'react'
import { toast } from 'react-toastify'
import { updateProfileApi } from '../../Services/allApis'
import { useNavigate } from 'react-router-dom'
import {authContext } from "../ContextApi/Context"
import { baseURL } from '../../Services/baseURL'

function Profile() {
    const [profileShow, setProfileShow] = useState(false)

    const [profiledata,setProfiledata]=useState({
        username:"",github:"",linkedin:"",profile:""
    })
    const [preview,setPreview]=useState("")
    const nav=useNavigate()
    const {setAuthStatus}=useContext(authContext)

    useEffect(()=>{
        if(sessionStorage.getItem('userData')){
            const userData=JSON.parse(sessionStorage.getItem("userData"))
            setProfiledata({...userData})
        }
    },[])

    useEffect(()=>{
        if(profiledata.profile.type){
            setPreview(URL.createObjectURL(profiledata.profile))
        }else{
            setPreview("")
        }
    },[profiledata.profile.type])

    const handleEdit=async()=>{
        console.log(profiledata);
        const {username,github,linkedin,profile}=profiledata
        if(!username||!linkedin||!github||!profile){
            toast.warning("Enter valid terms")
        }else{
            if(profile.type){
                var header={
                    "Authorization":`Token ${sessionStorage.getItem('token')}`,
                    "Content-Type":"multipart/form-data"
                }
            }else{
                var header={
                    "Authorization":`Token ${sessionStorage.getItem('token')}`,
                    "Content-Type":"application/json"
                }
            }
            const response=await updateProfileApi(header,profiledata)
            if(response.status==200){
                toast.success("Profile Updated")
                nav('/')
                sessionStorage.clear()
                setAuthStatus(false)
            }
            else{
                toast.error("Updation Error")
                console.log(response);   
            }
        }
    }

    const toggleProfile = () => {
        setProfileShow(!profileShow)
    }
    return (
        <>
            <div className='container-fluid border border-2 border-info p-3 my-2'>
                <div className='d-flex justify-content-between'>
                    <h3>Profile</h3>
                    <button className="btn" onClick={toggleProfile}>
                        {
                            profileShow ?
                                <i className="fa-solid fa-toggle-on fa-xl text-success"></i>
                                :
                                <i className="fa-solid fa-toggle-off fa-xl text-danger"></i>
                        }
                    </button>
                </div>
                {
                    profileShow &&
                    <div>
                        <label htmlFor="pf" className='d-flex justify-content-center mb-3'>
                            <input type="file" onChange={e=>{setProfiledata({...profiledata,profile:e.target.files[0]})}} name="" id="pf" style={{ display: "none" }} className="file" />
                            <img src={preview?preview:(profiledata.profile?`${baseURL}projectimage/${profiledata.profile}`:"https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg")} style={{ width: "75%" }} alt="profile" />
                        </label>
                        <input type="text" placeholder='username' className='form-control my-2' onChange={e=>{setProfiledata({...profiledata,username:e.target.value})}} defaultValue={profiledata.username} name="" id="" />
                        <input type="text" placeholder='Git Link' className='form-control my-2' onChange={e=>{setProfiledata({...profiledata,github:e.target.value})}} defaultValue={profiledata.github} name="" id="" />
                        <input type="text" placeholder='LinkedIn URL' className='form-control my-2' onChange={e=>{setProfiledata({...profiledata,linkedin:e.target.value})}} defaultValue={profiledata.linkedin} name="" id="" />
                        <div className='d-flex justify-content-between'>
                            <button className="btn btn-success" onClick={handleEdit}>Update</button>
                            <button className="btn btn-danger">Close/Cancel</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Profile