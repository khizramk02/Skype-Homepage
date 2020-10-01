import React from 'react';
import './Feature.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards';
import msEdge from '../assets/card1.jpg';
import Subtitles from '../assets/card2.jpg';
import phone from '../assets/card3.jpg';
import recording from '../assets/card4.jpg';
import number from '../assets/card5.jpg';
import sharing from '../assets/card6.jpg';
import video_call from '../assets/card7.jpg';



const Features = () => {

    const responsive = {
        desktop: {
            partialVisible: true,
            breakpoint: { max: 3000, min: 1024 },
            items: 3.5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <div className='text-center heading'>
                <h1>Discover more features</h1>
            </div>
            <div>
                <Carousel
                    // swipeable={true}
                    // draggable={false}
                    // showDots={true}
                    //centerMode={true}
                    responsive={responsive}
                // ssr={false} // means to render carousel on server-side.
                // infinite={false}
                // //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={1000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerClass="carousel-container"
                // //removeArrowOnDeviceType={["tablet", "mobile"]}
                // //deviceType={this.props.deviceType}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
                >
                    {/* card1 */}
                    <Cards
                        image={msEdge}
                        heading={'Download the new browser recommended by Microsoft'}
                        text={'You get it all with the new Microsoft Edge—performance, compatibility, and speed to make browsing the web even more effortless.'}
                        link={'Download now >'} />

                    {/* card2 */}
                    <Cards
                        image={Subtitles}
                        heading={'Live subtitles'}
                        text={'Read the words that are spoken during an audio or video call.'}
                        link={'How to set subtitles >'} />

                    {/* card3 */}
                    <Cards
                        image={phone}
                        heading={'Use Skype to call phones'}
                        text={'Call landlines and mobiles from anywhere in the world at great low rates using Skype.'}
                        link={'See our rates >'} />

                    {/* card4 */}
                    <Cards
                        image={recording}
                        heading={'Skype call recording​'}
                        text={'Capture those special moments in a Skype call with your loved ones or record important meeting with colleagues.​'}
                        link={'How to record calls >'} />

                    {/* card5 */}
                    <Cards
                        image={number}
                        heading={'Skype Number'}
                        text={'Get a local phone number in another country or region and answer calls on Skype.'}
                        link={'Get your number >'} />

                    {/* card6 */}
                    <Cards
                        image={sharing}
                        heading={'Mobile screen sharing'}
                        text={'Share anything from presentations to holiday photos during a call.'}
                        link={'Discover screen sharing >'} />

                    {/* card7 */}
                    <Cards
                        image={video_call}
                        heading={'Video calling for 50 people'}
                        text={'Experience HD one to one or group video calling—now with call reactions.'}
                        link={'Explore video calls >'} />


                </Carousel>
            </div>
        </div>
    )
}

export default Features
