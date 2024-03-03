import React from "react";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import teamMemberImage1 from "../media/Ashwini.jpg";
import teamMemberImage2 from "../media/Atharva.jpg";
import teamMemberImage3 from "../media/Siddhesh.jpg";
import teamMemberImage4 from "../media/Ganesh.jpg";


import "../Css/AboutUs.css";
export function AboutUs() {
    return (
        <><style>
            {`
            body, .container_text-center {
                background-color: #B3E5FC;
            }
        `}
        </style>
            <NavigationBar />
            <section className="section-white mt-5 text-center">
                <h1>About Us</h1>
                <h5>Who are we?</h5>
                <div className="container" style={{ background: '#fff', paddingBottom: '20px', borderRadius: '30px' }}>

                    <Container>
                        <h5>
                            Welcome to Explore-EASE, your ultimate travel companion for seamless and personalized accommodation experiences. At Explore-EASE, we believe that every journey should be marked with comfort, convenience, and discovery. Our platform connects travelers with a diverse range of lodging options, from cozy apartments to luxurious villas, ensuring that each traveler finds the perfect retreat tailored to their needs. Whether you're embarking on a solo adventure, planning a family vacation, or organizing a business trip, Explore-EASE empowers you to explore the world with ease. By providing a curated selection of accommodations, intuitive booking processes, and dedicated customer support, we strive to make every stay memorable and hassle-free. Join us in unlocking the endless possibilities of travel, where comfort meets adventure, only with Explore-EASE.
                        </h5>
                    </Container>
                </div>
                <p></p>
                <div className="container" style={{ background: '#fff', paddingBottom: '20px', borderRadius: '30px' }}>
                    <Container>
                        <h5>
                            At Explore-EASE, our mission is to redefine the way travelers experience their destinations. We're more than just a booking platform; we're your trusted companion on your journey towards unforgettable memories. Our team is dedicated to curating a diverse portfolio of accommodations, ensuring that each property meets our high standards of quality, comfort, and authenticity. With Explore-EASE, you can explore the world with confidence, knowing that every stay promises a unique and enriching experience. From hidden gems off the beaten path to iconic landmarks, we're here to guide you on your quest for exploration and discovery. Driven by a passion for travel and a commitment to excellence, Explore-EASE is your gateway to a world of possibilities. Whether you're seeking a serene beachfront retreat, a charming countryside escape, or a vibrant urban oasis, we're here to make your travel dreams a reality. With our user-friendly platform, innovative features, and dedication to customer satisfaction, we strive to exceed your expectations at every turn. Join the Explore-EASE community today and embark on a journey filled with unforgettable moments, meaningful connections, and boundless adventure. Your next extraordinary escape awaits – let's explore together!
                        </h5>
                    </Container>
                </div>
            </section>

            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <img src={teamMemberImage1} className="img-fluid rounded small-image" alt="About 1" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="about-details">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h1 className="mb-3">Ashwini Vasantrao Patil</h1>
                                        <p className="lead fs-4 text-secondary mb-3">Creative thinker whose designs captivate and innovate.</p>
                                        <h6 className="mb-5">Ashwini's creativity and resourcefulness have significantly contributed to the success of our project.
                                            Her keen eye for design and knack for translating ideas into tangible solutions have consistently exceeded expectations. Ashwini's passion for her work, coupled with her ability to think outside the box, has consistently pushed the boundaries of innovation within our team.
                                            We are immensely grateful for Ashwini's unwavering dedication and invaluable contributions.</h6>
                                        <div className="row gy-4 gy-md-0 gx-xxl-5X">
                                            <div className="col-12 col-md-6">
                                                <div className="d-flex align-items-center">
                                                    <a href="#" className="BsLinkedin">
                                                        <BsLinkedin className="linkedin-icon" style={{ fontSize: '24px' }} />
                                                        LinkedIn
                                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="icon-space"></span>
                                                    <a href="#" className="BsTwitter">
                                                        <BsTwitter className="twitter-icon" style={{ fontSize: '24px' }} />
                                                        Twitter
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <img src={teamMemberImage2} className="img-fluid rounded small-image" alt="About 1" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="about-details">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h1 className="mb-3">Atharva Maruthi Ghodake</h1>
                                        <p className="lead fs-4 text-secondary mb-3">Meticulous problem-solver with an eye for detail.</p>
                                        <h6 className="mb-5">Atharva's unwavering dedication and meticulous attention to detail have been instrumental in driving our project forward. 
                                        His innovative thinking and proactive approach have consistently brought fresh perspectives to the table, 
                                        enriching our team's collaborative efforts. We deeply appreciate Atharva's passion for excellence and his relentless pursuit of success, which continue to inspire us all.</h6>
                                        <div className="row gy-4 gy-md-0 gx-xxl-5X">
                                            <div className="col-12 col-md-6">
                                                <div className="d-flex align-items-center">
                                                    <a href="#" className="BsLinkedin">
                                                        <BsLinkedin className="linkedin-icon" style={{ fontSize: '24px' }} />
                                                        LinkedIn
                                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="icon-space"></span>
                                                    <a href="#" className="BsTwitter">
                                                        <BsTwitter className="twitter-icon" style={{ fontSize: '24px' }} />
                                                        Twitter
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <img src={teamMemberImage3} className="img-fluid rounded small-image" alt="About 1" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="about-details">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h1 className="mb-3">Siddhesh Suresh Pagar</h1>
                                        <p className="lead fs-4 text-secondary mb-3">Natural provider who inspires with his vision and drive.</p>
                                        <h6 className="mb-5">Siddhesh's remarkable skills and exceptional problem-solving abilities have been invaluable assets to our team.
                                            His steadfast commitment to achieving excellence in every task he undertakes serves as a beacon of motivation for us all. Siddhesh's positive attitude,
                                            coupled with his strong work ethic, has fostered a culture of collaboration and innovation within our team, for which we are truly grateful.</h6>
                                        <div className="row gy-4 gy-md-0 gx-xxl-5X">
                                            <div className="col-12 col-md-6">
                                                <div className="d-flex align-items-center">
                                                    <a href="#" className="BsLinkedin">
                                                        <BsLinkedin className="linkedin-icon" style={{ fontSize: '24px' }} />
                                                        LinkedIn
                                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="icon-space"></span>
                                                    <a href="#" className="BsTwitter">
                                                        <BsTwitter className="twitter-icon" style={{ fontSize: '24px' }} />
                                                        Twitter
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <img src={teamMemberImage4} className="img-fluid rounded small-image" alt="About 1" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="about-details">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-11">
                                        <h1 className="mb-3">Ganesh Vivek Bude</h1>
                                        <p className="lead fs-4 text-secondary mb-3">Technical wizard who turns challenges into opportunities.</p>
                                        <h6 className="mb-5">Ganesh's expertise and technical prowess have been indispensable assets to our team.
                                            His deep understanding of complex systems and technologies has played a pivotal role in overcoming challenges and achieving milestones.
                                            Ganesh's willingness to go above and beyond in tackling difficult problems reflects his unwavering commitment to excellence.
                                            We are deeply appreciative of Ganesh's hard work, resilience, and exceptional contributions to our project.</h6>
                                        <div className="row gy-4 gy-md-0 gx-xxl-5X">
                                            <div className="col-12 col-md-6">
                                                <div className="d-flex align-items-center">
                                                    <a href="#" className="BsLinkedin">
                                                        <BsLinkedin className="linkedin-icon" style={{ fontSize: '24px' }} />
                                                        LinkedIn
                                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <span className="icon-space"></span>
                                                    <a href="#" className="BsTwitter">
                                                        <BsTwitter className="twitter-icon" style={{ fontSize: '24px' }} />
                                                        Twitter
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
