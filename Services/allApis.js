import { baseURL } from "./baseURL"
import commonApi from "./commonApi"

export const regUserApi = async (data) => {
    return await commonApi(`${baseURL}reg`, "POST", "", data)
}
export const logUserApi = async (data) => {
    return await commonApi(`${baseURL}login`, "POST", "", data)
}

export const addProjectApi=async(data)=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
        "Content-Type":"multipart/form-data"
    }
    return await commonApi(`${baseURL}addproject`,"POST",header,data)
}

export const userProjectsApi=async()=>{
    const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
        "Content-Type":"application/json"
    }
    return await commonApi(`${baseURL}userprojects`,"GET",header,"")
}

export const deleteProjectApi=async(id)=>{
     const header={
        "Authorization":`Token ${sessionStorage.getItem('token')}`,
        "Content-Type":"application/json"
    }
    return await commonApi(`${baseURL}delproject/${id}`,"DELETE",header,{})
}

export const editProjectApi=async(id,header,data)=>{
    return await commonApi(`${baseURL}editproject/${id}`,"PUT",header,data)
} 

export const updateProfileApi=async(header,data)=>{
    return await commonApi(`${baseURL}updateprofile` ,"PUT",header,data)
}

export const allProjectApi=async()=>{
    return await commonApi(`${baseURL}allprojects`,"GET","","")
}