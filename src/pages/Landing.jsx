import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { useEffect, useState } from 'react'
import { allProjectApi } from '../../Services/allApis'

function Landing() {

    const [logState, setLogState] = useState()
    const [samples, setSamples] = useState([])
    useEffect(() => {
        getData()
        if (sessionStorage.getItem("token")) {
            setLogState(true)
        }
        else {
            setLogState(false)
        }
    }, [])

    const getData = async () => {
        const response = await allProjectApi()
        console.log(response);
        if (response.status == 200) {
            setSamples(response.data.slice(0, 3))
        } else {
            console.log(response);

        }
    }

    return (
        <>
            <div className='container-fluid'>
                <div style={{ minheight: "60vh" }} className='w-100 row'>
                    <div className='col-sm-12 col-md-6 d-flex justify-content-center flex-column '>
                        <h1>ProjectFare 2025</h1>
                        <p style={{ textAlign: "justify" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae eum blanditiis minus in totam pariatur deleniti unde, velit iure saepe architecto, aliquid et rem veniam inventore, exercitationem aut nesciunt!
                            Rerum at nulla beatae corporis necessitatibus tenetur, assumenda nam nobis nihil laudantium error quis numquam doloribus repellendus tempore incidunt pariatur optio, consectetur, voluptate dicta quisquam nesciunt laboriosam inventore officiis. Quibusdam?
                            Repellendus cupiditate doloremque nam. Itaque blanditiis, veritatis accusamus eius quod aut doloremque voluptatibus laboriosam exercitationem eaque quas praesentium, voluptas numquam delectus! Hic sint autem, aliquam delectus iure laboriosam error dicta?</p>
                        <div className='d-grid'>
                            {
                                logState ?
                                    <Link to={'/dash'} className='btn btn-success'>Go to DashBoard</Link>
                                    :
                                    <Link to={'/auth'} className='btn btn-warning'>Explore now....</Link>


                            }
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 d-flex justify-content-center'>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-web-developer-doing-research-on-development-illustration-download-in-svg-png-gif-file-formats--thinking-researching-and-pack-design-illustrations-4759504.png?f=webp" className='img-fluid' alt="" />
                    </div>
                </div>
                <div className='w-100 my-5'>
                    <h3>Projects you may like..</h3>
                    <div className='d-flex justify-content-around my-5'>
                        {
                            samples.length > 0 ?
                                <>
                                    {samples.map(item => (
                                        <ProjectCard project={item}/>
                                    ))}
                                </>
                                :
                                <h4>NO projects found</h4>
                        }
                    </div>
                </div>
                <div className='text-center my-5'>
                    <Link to={'/allproject'}>View more...</Link>
                </div>


            </div>

        </>
    )
}

export default Landing
