import React from "react";
import logo from "./habot-logo (1).jpg"


function Navbar() {
    return (
        <>
            <div className=" bg-body-light shadow-lg">
                <nav class="container navbar navbar-expand-lg  ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" height={"40"} />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"></a>
                                </li>

                            </ul>
                            <form class="d-flex flex-lg-row flex-column  mainform" role="search">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Find Suppliers</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Find Suppliers
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">SourceHub</a></li>
                                            <li><a class="dropdown-item" href="#">SupplyNet</a></li>
                                            <li><a class="dropdown-item" href="#">VendorVault</a></li>
                                            <li><a class="dropdown-item" href="#">SupplyLink</a></li>
                                            <li><a class="dropdown-item" href="#">ProvisionPoint</a></li>
                                            <li><a class="dropdown-item" href="#">Trusted Partners</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="d-flex  justify-content-lg-start w-auto">
                                    <button class="btn btn-outline-success submitbtn" type="submit">Login / Sign Up</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
