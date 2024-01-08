import React from "react";
import Navbar from "./Navbar";
import Banner from "../images/Full_Banner.png";
import FullStackTeacher from "../images/FullStackTeacher.png";
import Footer from "./Footer";
import PopupForm from "./PopupForm";

const FullStackPage = () => {
    return (
        <>
            <PopupForm />
            <Navbar />

            {/* Main Baneer */}
            <section className='bannerSec FullStackBanner'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="banner-content">
                                <h3>Learn Fullstack Complate</h3>
                                <p>Hack2skill is the largest and fastest-growing community of technology innovators, including startups, working professionals, freelancers, and student innovators.</p>
                                <div className="buttons">
                                    <button class="MainButton" type='button'>Explore Upflairs</button>
                                    <button class="MainButton" type='button'>Organize Upflairs</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="banner_img">
                                <img src={Banner} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="OverviewSec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-12">
                            <div className="OverviewCon">
                                <h4 className="OverViewHeading">Overview</h4>
                                <p>Full Stack is an interdisciplinary field that combines techniques from statistics, computer science, and domain knowledge to extract valuable insights, patterns, and knowledge from data. It encompasses a wide range of activities, from data collection and preprocessing to advanced analysis and modeling. Data science is driven by the need to make data-driven decisions, solve complex problems, and generate actionable information from vast and varied datasets.</p>
                            </div>
                        </div>
                        <div className="col-md-7 col-12">
                            <div className="OverviewMainDiv">
                                <h4 className="OverViewHeading">What You Will Learn</h4>
                                <ul>
                                    <li>
                                        <div className="check">
                                            <i class="fa-solid fa-circle-check"></i>
                                        </div>
                                        <div className="con">
                                            <h5>Complete Fullstck Development</h5>
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <i class="fa-solid fa-circle-check"></i>
                                        </div>
                                        <div className="con">
                                            <h5>Complete Fullstck Development</h5>
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <i class="fa-solid fa-circle-check"></i>
                                        </div>
                                        <div className="con">
                                            <h5>Complete Fullstck Development</h5>
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <i class="fa-solid fa-circle-check"></i>
                                        </div>
                                        <div className="con">
                                            <h5>Complete Fullstck Development</h5>
                                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Masterclass */}

            {/* Join Masterclass */}
            <section className="UpcomingMasterclass">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="headings text-center">Join Masterclass</h2>
                        </div>
                    </div>
                    <div className="row align-items-center gy-4">
                        <div className="col-md-6 col-12">
                            <div className="UpMasCon">
                                <h4>Register For <b>Superfast Author</b> Masterclass</h4>
                                <button type="button" className="MainButton AnimateButton">Register Now</button>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="UpMasBtns">
                                <button type="button" className="ICNBTNS">
                                    <i class="fa-solid fa-calendar-days"></i>
                                    <h6>Saturday | 13 Jan 2024</h6>
                                </button>
                                <button type="button" className="ICNBTNS">
                                    <i class="fa-solid fa-clock"></i>
                                    <h6>10 AM IST (India)</h6>
                                </button>
                                <button type="button" className="ICNBTNS">
                                    <i class="fa-solid fa-video"></i>
                                    <h6>Google Meet</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teacher Section */}
            <section className="TeacherSection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 class="headings text-center">Who Is Your Mentor</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4 col-12">
                            <div className="TeacherDiv">
                                <img src={FullStackTeacher} alt="Full Stack" />
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="TeacherCon">
                                <h3>Krishna Singh</h3>
                                <h5>5+ Years Experience</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio maxime corporis at consequuntur esse quidem dolor debitis soluta quasi repellendus laborum optio ea rerum incidunt expedita illum excepturi veniam, eos tempora accusamus. Dolore perferendis alias harum voluptatibus numquam inventore, iste quaerat, iure enim quod necessitatibus laborum quis ipsam tempora!</p>
                                <button type="button" class="MainButton">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="WhyChooseSec WhyJoin">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 class="headings text-center">Why Join Masterclass</h2>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-md-6 col-12">
                            <div className="WhyChooseDiv">
                                <div className="Fir">
                                    <i class="fa-solid fa-chalkboard-user"></i>
                                </div>
                                <div className="Sec">
                                    <h3>Best Teachers</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi explicabo, sit at iusto repellat quod?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="WhyChooseDiv">
                                <div className="Fir">
                                    <i class="fa-solid fa-chalkboard-user"></i>
                                </div>
                                <div className="Sec">
                                    <h3>Best Teachers</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi explicabo, sit at iusto repellat quod?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="WhyChooseDiv">
                                <div className="Fir">
                                    <i class="fa-solid fa-chalkboard-user"></i>
                                </div>
                                <div className="Sec">
                                    <h3>Best Teachers</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi explicabo, sit at iusto repellat quod?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="WhyChooseDiv">
                                <div className="Fir">
                                    <i class="fa-solid fa-chalkboard-user"></i>
                                </div>
                                <div className="Sec">
                                    <h3>Best Teachers</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi explicabo, sit at iusto repellat quod?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Register Fees */}
            <section className="RegisterFeesSec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="headings text-center">Online Webinar Fees</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="RegisterCol">
                                <ul>
                                    <li>
                                        <p className="fees">Fees = 1099</p>
                                    </li>
                                    <li>
                                        <p className="freeFees">Free</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="RegisterFeesBtn text-center">
                                <button type="button" className="MainButton">Register For Online Masterclass</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Master Class */}
            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 class="headings text-center">Join Master Class</h2>
                        </div>
                        <div className="col-12">

                        </div>
                    </div>
                </div>
            </section> */}

            {/* Footer */}
            <Footer />

        </>
    )
}

export default FullStackPage;