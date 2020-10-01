import React from 'react'
import SubFooter from './SubFooter';
import BottomFooter from './BottomFooter';

const Footer = () => {
    return (
        <div>

            <div className="container-fluid jumbotron">
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        <SubFooter
                            heading="What's new"
                            listItems={[
                                'Surface Duo',
                                'Surface Go 2',
                                'Surface Book 3',
                                'Microsoft 365',
                                'Surface Pro X',
                                'Windows 10 apps'
                            ]} />
                    </div>


                    <div className="col-lg-2 col-md-4">
                        <SubFooter
                            heading="Microsoft Store"
                            listItems={[
                                'Account profile',
                                'Download Center',
                                'Microsoft Store support',
                                'Returns',
                                'Order Tracking',
                                'Store locations',
                                'Virtual workshops and training',
                                'Microsoft Store Promise'
                            ]} />
                    </div>


                    <div className="col-lg-2 col-md-4">
                        <SubFooter
                            heading="Education"
                            listItems={[
                                'Microsoft in education',
                                'Office for students',
                                'Office 365 for schools',
                                'Deals for students & parents',
                                'Microsoft Azure in education'
                            ]} />
                    </div>


                    <div className="col-lg-2 col-md-4">
                        <SubFooter
                            heading="Enterprise"
                            listItems={[
                                'Azure',
                                'AppSource',
                                'Automotive',
                                'Government',
                                'Healthcare',
                                'Manufacturing',
                                'Financial services',
                                'Retail'
                            ]} />
                    </div>


                    <div className="col-lg-2 col-md-4">
                        <SubFooter
                            heading="Developer"
                            listItems={[
                                'Microsoft Visual Studio',
                                'Windows Dev Center',
                                'Developer Center',
                                'Microsoft Developer Program',
                                'Channel 9',
                                'Office Dev Center',
                                'Microsoft Garage'
                            ]} />
                    </div>


                    <div className="col-lg-2 col-md-4">
                        <SubFooter
                            heading="Company"
                            listItems={[
                                'Careers',
                                'About Microsoft',
                                'Company news',
                                'Privacy at Microsoft',
                                'Investors',
                                'Diversity and inclusion',
                                'Accessibility',
                                'Security'
                            ]} />
                    </div>


                </div>
                <div>
                    <BottomFooter />
                </div>
            </div>
        </div>


    )
}

export default Footer
