import React from 'react';
import './ExtraInfo.css'
import chrome from '../assets/chrome.png';
import edge from '../assets/edge.png';
import call_icon from '../assets/call_cut.png';

const ExtraInfo = () => {
    return (
        <div className='links'>
            <div className='extra' id='chatNowSection'>
                <h1>Try Skype in your browser</h1>
                <p>No installations needed.</p>
                <img src={edge}></img>
                <img src={chrome}></img><br />
                <button className='btn'>Chat now</button>
            </div>

            <div className='container '>
                <div className="row">
                    <div className="col-lg-4 col-md-2 col-12">
                        <ul className='social-links'>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Youtube</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div className="col-lg-8 col-md-10 col-12 emergency">
                        <p><img src={call_icon} width='20px' />No emergency calls with Skype</p>
                        <h6>Skype is not a replacement for your telephone and can't be used for emergency calling</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraInfo
