import React from 'react'
import skypeLogoImg from '../assets/skype_logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand " href="#">
                    <img src={skypeLogoImg} width='108px'></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="logo" href="#">Skype <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-font" href="#">Downloads</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-font" href="#">Skype To Phone</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-font" href="#">Skype Number</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-font" href="#">Features</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-font dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Products</a>
                                <a className="dropdown-item" href="#">Get Help</a>
                            </div>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className="nav-item">
                            <a className="nav-font" href="#">Host a meeting</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-font dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sign in
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                            </div>
                        </li>


                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
