import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container-fluid bg-info'>
                <div className='row'>
                    <div className="col">
                        <h2>ProjectFare 2025</h2>
                        <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit amet ducimus aspernatur minima voluptates repudiandae, nemo
                            odio commodi error ipsa unde, pariatur quos atque optio blanditiis magnam quidem, architecto nam!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita laudantium cumque similique praesentium sed perferendis labore ab sit dolores consequuntur, eum, quia adipisci distinctio architecto
                            delectus quos animi nulla hic?</p>
                    </div>
                    <div className="col-2">
                        <h2 className='text-center'>Links</h2>
                        <div className='d-flex justify-content-around flex-column align-items-center'>
                            <Link to={'/'}>Landing</Link>
                            <Link to={'/auth'}>Login</Link>
                        </div>
                    </div>
                    <div className="col">
                        <h2>FeedBacks</h2>
                        <textarea name="" placeholder='Enter feedBack' className='form-control my-3' id=""></textarea>
                        <button className='btn btn-success'>SEND</button>
                    </div>
                </div>
                <h6 className='text-center pb-2'>ProjectFare 2025 &copy; copyrights reserved</h6>
            </div>
        </>
    )
}

export default Footer
