import React from 'react'
import './Work.css'
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
import img6 from "./img6.png"

function Work() {
    return (
        <>
            <div className="pads">
                <h3 className='text-center fw-bold'>How it works?</h3>
                <p class="responsive-text">
                    Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
                    potential buyers, and build successful business relationships, sharing valuable feedback.
                </p>

            </div>
            <div className='pads pad container'>
                <div class="row">
                    <div class="col-lg-4 text-center img1 p-5">
                        <img src={img1} class="bd-placeholder-img " width="" height="60" alt="" />
                        <h6 class=""  >Select Your Role and Sign Up</h6>
                    </div>
                    <div class="col-lg-4 text-center  p-5">
                        <img src={img2} class="bd-placeholder-img " width="" height="80" alt="" />
                        <h6 class=""  >Buyers Post Your
                            Requirements</h6>
                    </div>
                    <div class="col-lg-4 text-center img1 p-5">
                        <img src={img3} class="bd-placeholder-img " width="" height="65" alt="" />
                        <h6 class=""  >Review, Select, and
                            Contact the Best Suppliers</h6>
                    </div>
                    <div class="col-lg-4 text-center p-5">
                        <img src={img4} class="bd-placeholder-img " width="" height="66" alt="" />
                        <h6 class=""  >Suppliers Complete your profile and get notified for opportunities</h6>
                    </div>
                    <div class="col-lg-4 text-center img1 p-5">
                        <img src={img5} class="bd-placeholder-img " width="" height="65" alt="" />
                        <h6 class=""  >Contact to Buyers and Share
                        your Quote for the service</h6>
                    </div>
                    <div class="col-lg-4 text-center p-5">
                        <img src={img6} class="bd-placeholder-img " width="" height="66" alt="" />
                        <h6 class=""  >Both the Parties can Connect and Make Business Leave a Feedback</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
