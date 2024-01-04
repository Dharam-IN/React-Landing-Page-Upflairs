import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import upSkillImg from "../images/upskillImg.png";
import courseImg1 from "../images/course1.png";
import Partner1 from '../images/partnerLogo_2.png';

const Mainpage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <section className="upSkillSec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12">
                            <div className="upSkillImg">
                                <img src={upSkillImg} alt="image" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="upSkillCon">
                                <h4 className="headings">Upskill with Hack2skill</h4>
                                <p>Upflairs Advanced Skill Development Program, offering the Best in segment curriculum to help you in becoming a Pro with Live Project Exposure.</p>
                                <button class="MainButton" type='button'>Start Your Journy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* upcoming course */}
            <section className="CourseSlide">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 class="headings text-center mb-4">Upcoming Course</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="owl-carousel CourseCarousel owl-theme">
                            <div className="item">
                                <div className="courseCard">
                                    <div className="imgCard">
                                        <img src={courseImg1} alt="image1" />
                                    </div>
                                    <div className="conCard">
                                        <h3>Reinventing Youth Communication Hackathon</h3>
                                        <p>Smart India Hackathon 2023 is a nationwide initiative launched by AICTE and MoE to provide students with a platform to solve some of the pressing problems we face in our daily lives.</p>
                                        <ul>
                                            <li>
                                                <h6>Free:</h6>
                                                <span>Free</span>
                                            </li>
                                            <li>
                                                <h6>Mode:</h6>
                                                <span>Offile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="courseCard">
                                    <div className="imgCard">
                                        <img src={courseImg1} alt="image1" />
                                    </div>
                                    <div className="conCard">
                                        <h3>Reinventing Youth Communication Hackathon</h3>
                                        <p>Smart India Hackathon 2023 is a nationwide initiative launched by AICTE and MoE to provide students with a platform to solve some of the pressing problems we face in our daily lives.</p>
                                        <ul>
                                            <li>
                                                <h6>Free:</h6>
                                                <span>Free</span>
                                            </li>
                                            <li>
                                                <h6>Mode:</h6>
                                                <span>Offile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="courseCard">
                                    <div className="imgCard">
                                        <img src={courseImg1} alt="image1" />
                                    </div>
                                    <div className="conCard">
                                        <h3>Reinventing Youth Communication Hackathon</h3>
                                        <p>Smart India Hackathon 2023 is a nationwide initiative launched by AICTE and MoE to provide students with a platform to solve some of the pressing problems we face in our daily lives.</p>
                                        <ul>
                                            <li>
                                                <h6>Free:</h6>
                                                <span>Free</span>
                                            </li>
                                            <li>
                                                <h6>Mode:</h6>
                                                <span>Offile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="courseCard">
                                    <div className="imgCard">
                                        <img src={courseImg1} alt="image1" />
                                    </div>
                                    <div className="conCard">
                                        <h3>Reinventing Youth Communication Hackathon</h3>
                                        <p>Smart India Hackathon 2023 is a nationwide initiative launched by AICTE and MoE to provide students with a platform to solve some of the pressing problems we face in our daily lives.</p>
                                        <ul>
                                            <li>
                                                <h6>Free:</h6>
                                                <span>Free</span>
                                            </li>
                                            <li>
                                                <h6>Mode:</h6>
                                                <span>Offile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="courseCard">
                                    <div className="imgCard">
                                        <img src={courseImg1} alt="image1" />
                                    </div>
                                    <div className="conCard">
                                        <h3>Reinventing Youth Communication Hackathon</h3>
                                        <p>Smart India Hackathon 2023 is a nationwide initiative launched by AICTE and MoE to provide students with a platform to solve some of the pressing problems we face in our daily lives.</p>
                                        <ul>
                                            <li>
                                                <h6>Free:</h6>
                                                <span>Free</span>
                                            </li>
                                            <li>
                                                <h6>Mode:</h6>
                                                <span>Offile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="courseCard">
                                    <div className="imgCard">
                                        <img src={courseImg1} alt="image1" />
                                    </div>
                                    <div className="conCard">
                                        <h3>Reinventing Youth Communication Hackathon</h3>
                                        <p>Smart India Hackathon 2023 is a nationwide initiative launched by AICTE and MoE to provide students with a platform to solve some of the pressing problems we face in our daily lives.</p>
                                        <ul>
                                            <li>
                                                <h6>Free:</h6>
                                                <span>Free</span>
                                            </li>
                                            <li>
                                                <h6>Mode:</h6>
                                                <span>Offile</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* call to action */}
            <section className="CTA_Section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="CTA_Content">
                                <h4>Want to organize HACKATHON?</h4>
                                <p>Connect with us for organizing a HACKATHON on our platform.</p>
                                <button type="button" className="MainButton">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR CLIENT */}
            <section className="client-section ">
                <div className="container">
                    <div className="row">
                            <h2 className="text-center headings">
                                Our Client
                            </h2>
                        <div className="row">
                            <div className="owl-carousel client-logo owl-theme" id="client-logo">
                                <div className="item">
                                    <img
                                        src={Partner1}
                                        className="img-responsive"
                                        alt="client-logo"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={Partner1}
                                        className="img-responsive"
                                        alt="client-logo"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={Partner1}
                                        className="img-responsive"
                                        alt="client-logo"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={Partner1}
                                        className="img-responsive"
                                        alt="client-logo"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={Partner1}
                                        className="img-responsive"
                                        alt="client-logo"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={Partner1}
                                        className="img-responsive"
                                        alt="client-logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Mainpage;