import React, { useState } from 'react'

function Profile() {
    const [profileShow, setProfileShow] = useState(false)

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
                            <input type="file" name="" id="pf" style={{ display: "none" }} className="file" />
                            <img src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" style={{ width: "75%" }} alt="" />
                        </label>
                        <input type="text" placeholder='username' className='form-control my-2' name="" id="" />
                        <input type="text" placeholder='Git Link' className='form-control my-2' name="" id="" />
                        <input type="text" placeholder='LinkedIn URL' className='form-control my-2' name="" id="" />
                        <div className='d-flex justify-content-between'>
                            <button className="btn btn-success">Update</button>
                            <button className="btn btn-danger">Close/Cancel</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Profile