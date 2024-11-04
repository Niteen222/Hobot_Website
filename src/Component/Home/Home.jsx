import React from 'react';
import imgbg from './bg.png.webp';
import './Home.css'; // Add CSS file for styling

function Home() {
    return (
        <>
            <div id="myCarousel" className="carousel slide mb-6 " data-bs-ride="carousel">
                <div className="  carousel-inner">
                    <div className="carousel-item active">
                        {/* Background image with overlay */}
                        <div className="img-overlay">
                            <img src={imgbg} className="bd-placeholder-img" alt="background" />
                        </div>
                        <div className="container text-center container">
                            <div className="carousel-caption mt-5">
                                <h3 className='text-center fw-bold are'>Are You a Supplier?</h3>
                                <h1 className="fw-bold">Explore Matching Opportunities.</h1>
                                <div className="maininput">
                                    <div className="inp">
                                        <div className="input-container">
                                            <span className="input-icon"><i className="fa-solid fa-briefcase text-danger  fs-4"></i></span>
                                            <input type="text" className='fs-5' placeholder='Search your required service here' />
                                        </div>
                                        <div className="input-container">
                                            <span className="input-icon"><i class="fa-solid fa-location-dot text-danger fs-4"></i></span>
                                            <input type="text" className='fs-5' placeholder='Search your desired location here' />
                                        </div>
                                       
                                        <button type="button" className="btn btn-success success-btn fs-5">Search</button>
                                    </div>
                                </div>
                                <h5 className='text-center '><span className='fw-bold'>Are You a buyer?</span> <span className=''>
                                    <a href="#" className='text-white'> Click here if you are looking to post a requirements</a>
                                    </span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
