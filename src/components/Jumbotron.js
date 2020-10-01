import React from 'react'
import deskImage from '../assets/front_image.png';
import tabImage from '../assets/front_image2.png';
import mobImage from '../assets/mob_image.png';
import './Jumbotron.css';

const Jumbotron = () => {
    return (

        <div className='jumbotron m-4'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 left">
                        <div className='float_l'>
                            <h2>Meet Now on Skype</h2>
                            <h3>Host a video meeting in one click! No sign ups. No downloads required.</h3>
                        </div>

                        <span className="btnWrapper text-center pad"><a className="btn btn_primary" href="https://www.skype.com/en/free-conference-call/"><span className='meet_button'>Create a free meeting </span> </a><br /> <a className='text' href="https://www.skype.com/en/get-skype/">or Download Skype</a>
                        </span>

                    </div>
                    <div className="col-lg-6 " id='desk_image'>
                        <img src={deskImage} width='100%' height='auto'></img>
                    </div>

                    <div className="col-lg-6" id='tab_image'>
                        <img src={tabImage} width='100%' height='auto'></img>
                    </div>

                    <div className="col-lg-6" id='mob_image'>
                        <img src={mobImage} width='100%' height='auto'></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Jumbotron


