import React from 'react'
import './Footer.css'
import logo1 from "./ft1.png"
import logo2 from "./ft2.png"

function Footer() {
    return (
        <>
            <div className="ft ">
            <div className="container pads">
                <div className="mainft">
                    <footer className="py-5 div1">
                        <div className="row gx-5 ">
                            <div className="col-6 col-md-2 mb-3">
                                <h5></h5>
                                <ul className="nav flex-column">
                                    <div className="imgft d-flex gap-2 p-0">
                                        <img src={logo1} height="25" alt="" />
                                        <img src={logo2} height="20" alt="" />
                                    </div>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-white">© R Singhania</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <h6 className="text-white fw-bold">Company</h6>
                                <ul className="nav flex-column gap-1">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQ</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h6 className="text-white fw-bold   ">Terms</h6>
                                <ul className="nav flex-column gap-1">
                                    <li className="nav-item mb-2 "><a href="#" className="nav-link p-0 text-white">Data Privacy</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Terms</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Accessibility</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <h6 className="text-white fw-bold">Related</h6>
                                <ul className="nav flex-column gap-1">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Find Buyer</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Feedback</a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                    <div className="div2 mt-3">
                        <div className="logos d-flex gap-2 justify-content-center p-4">
                            <span className="logo1"><i className="fa-brands fa-linkedin-in text-white"></i></span>
                            <span className="logo1"><i className="fa-brands fa-twitter text-white"></i></span>
                            <span className="logo1"><i className="fa-brands fa-facebook text-white"></i></span>
                            <span className="logo1"><i className="fa-brands fa-instagram text-white"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Footer
