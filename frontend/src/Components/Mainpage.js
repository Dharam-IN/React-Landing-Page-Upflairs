import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import upSkillImg from "../images/upskillImg.png";
import courseImg1 from "../images/course1.png";
import Partner1 from '../images/partnerLogo_2.png';
import event1 from '../images/event_1.jpg';
import event2 from '../images/event_2.jpeg';
import event3 from '../images/event_3.jpg';
import event4 from '../images/event_4.jpg';
import testi1 from '../images/Testimonial_1.jpeg';
import TopCourse1 from '../images/web-dev.jpg';
import Teacher1 from '../images/teacher1.jpeg';
import fresher from '../images/fresher1.png';
import student from '../images/student.png';
import employee from '../images/employee.png';
import { NavLink } from "react-router-dom";

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
                                <img src={upSkillImg} alt="images" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="upSkillCon">
                                <h4 className="headings borderNone">Upskill with Hack2skill</h4>
                                <p>Upflairs Advanced Skill Development Program, offering the Best in segment curriculum to help you in becoming a Pro with Live Project Exposure.</p>
                                <button class="MainButton" type='button'>Start Your Journy Now</button>
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

            {/* upcoming course */}
            <section className="CourseSlide">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 class="headings text-center">Upcoming Course</h4>
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

            {/* Top Course */}
            <section className="TopCourse">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 class="headings text-center">Top Courses</h2>
                        </div>
                    </div>
                    <div className="row gy-4">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="CourseCard">
                                <div className="top">
                                    <img src={TopCourse1} alt="images" />
                                    <p className="category">Top Selling</p>
                                </div>
                                <div className="bottom">
                                    <h2>
                                        Full Stack Development
                                    </h2>
                                    <p className="intro">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                        consectetur mauris sed mauris sagittis, nec pretium metus posuere.{" "}
                                    </p>
                                    <div className="info">
                                        <ul>
                                            <li>
                                                <i class="fa-regular fa-clock"></i>
                                                <span>2 Days Ago</span>
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-comment"></i>
                                                <span>16 Comments</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ReadAuthor">
                                        <div className="author">
                                            <div className="profile" >
                                                <img src={Teacher1} alt="teacher" />
                                            </div>
                                            <p className="name">
                                                By <NavLink to={'/'}>Suzan Hill</NavLink>
                                            </p>
                                        </div>
                                        <div className="ReadMore">
                                            <button type="button">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="CourseCard">
                                <div className="top">
                                    <img src={TopCourse1} alt="images" />
                                    <p className="category">Top Selling</p>
                                </div>
                                <div className="bottom">
                                    <h2>
                                        Full Stack Development
                                    </h2>
                                    <p className="intro">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                        consectetur mauris sed mauris sagittis, nec pretium metus posuere.{" "}
                                    </p>
                                    <div className="info">
                                        <ul>
                                            <li>
                                                <i class="fa-regular fa-clock"></i>
                                                <span>2 Days Ago</span>
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-comment"></i>
                                                <span>16 Comments</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ReadAuthor">
                                        <div className="author">
                                            <div className="profile" >
                                                <img src={Teacher1} alt="teacher" />
                                            </div>
                                            <p className="name">
                                                By <NavLink to={'/'}>Suzan Hill</NavLink>
                                            </p>
                                        </div>
                                        <div className="ReadMore">
                                            <button type="button">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="CourseCard">
                                <div className="top">
                                    <img src={TopCourse1} alt="images" />
                                    <p className="category">Top Selling</p>
                                </div>
                                <div className="bottom">
                                    <h2>
                                        Full Stack Development
                                    </h2>
                                    <p className="intro">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                        consectetur mauris sed mauris sagittis, nec pretium metus posuere.{" "}
                                    </p>
                                    <div className="info">
                                        <ul>
                                            <li>
                                                <i class="fa-regular fa-clock"></i>
                                                <span>2 Days Ago</span>
                                            </li>
                                            <li>
                                                <i class="fa-regular fa-comment"></i>
                                                <span>16 Comments</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ReadAuthor">
                                        <div className="author">
                                            <div className="profile" >
                                                <img src={Teacher1} alt="teacher" />
                                            </div>
                                            <p className="name">
                                                By <NavLink to={'/'}>Suzan Hill</NavLink>
                                            </p>
                                        </div>
                                        <div className="ReadMore">
                                            <button type="button">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Masterclass */}
            <section className="UpcomingMasterclass">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="headings text-center">Upcoming Masterclass</h2>
                        </div>
                    </div>
                    <div className="row align-items-center gy-4">
                        <div className="col-md-6 col-12">
                            <div className="UpMasCon">
                                <h4>Register For <b>Superfast Author</b> Masterclass</h4>
                                <button type="button" className="MainButton">Register Now</button>
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

            {/* Who Can Join */}
            <section className="WhoJoinSec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 class="headings text-center">Who Can Join</h2>
                        </div>
                    </div>
                    <div className="row gy-4">
                        <div className="col-md-4 col-12">
                            <div className="WhoJoinCard">
                                <img src={student} alt="icon" />
                                <h4>Student</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto molestias aut unde animi earum accusamus culpa quidem neque similique quis voluptate quam, eos nobis officia rerum repellendus nulla dolor?</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="WhoJoinCard">
                                <img src={fresher} alt="icon" />
                                <h4>Fresher</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto molestias aut unde animi earum accusamus culpa quidem neque similique quis voluptate quam, eos nobis officia rerum repellendus nulla dolor?</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="WhoJoinCard">
                                <img src={employee} alt="icon" />
                                <h4>Employee</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto molestias aut unde animi earum accusamus culpa quidem neque similique quis voluptate quam, eos nobis officia rerum repellendus nulla dolor?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FUTURE MASTER CLASS */}
            <section className="FutureMasterSec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="headings text-center">Future Masterclass</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="event-calendar">
                                <div className="heading-title">
                                    <h2> upcoming events </h2>
                                    <div className="icon-box">
                                        <i className="fas fa-calendar-alt" />
                                    </div>
                                </div>
                                <div className="events-body">
                                    <ul>
                                        <li>
                                            <NavLink to={"/"}>
                                                <div className="event-left-content">
                                                    <div className="title-event">
                                                        <h2>Full Stack Masterclass</h2>
                                                        <div className="event-date"> Feb 5, 2024</div>
                                                        <div className="event-location">Jaipur</div>
                                                    </div>
                                                </div>
                                                <div className="event-icon">
                                                    <div className="month">Feb </div>
                                                    <div className="date">05 </div>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/"}>
                                                <div className="event-left-content">
                                                    <div className="title-event">
                                                        <h2>DevOps Masterclass</h2>
                                                        <div className="event-date"> Feb 10, 2024</div>
                                                        <div className="event-location"> Jaipur</div>
                                                    </div>
                                                </div>
                                                <div className="event-icon">
                                                    <div className="month">Feb </div>
                                                    <div className="date">10 </div>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/"}>
                                                <div className="event-left-content">
                                                    <div className="title-event">
                                                        <h2>Machine Learning & AI Masterclass</h2>
                                                        <div className="event-date"> Feb 15, 2024</div>
                                                        <div className="event-location"> Jaipur</div>
                                                    </div>
                                                </div>
                                                <div className="event-icon">
                                                    <div className="month">Feb </div>
                                                    <div className="date">15 </div>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* OUR EVENT */}
            <section className="EventSection">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center headings">
                            Unveiling Unforgettable Moments
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="EventImgCol">
                                <ul id="hexGrid">
                                    <li class="hex">
                                        <div class="hexIn">
                                            <img src={event1} alt="event image" />
                                        </div>
                                    </li>
                                    <li class="hex">
                                        <div class="hexIn">
                                            <img src={event2} alt="event image" />
                                        </div>
                                    </li>
                                    <li class="hex">
                                        <div class="hexIn">
                                            <img src={event3} alt="event image" />
                                        </div>
                                    </li>
                                    <li class="hex">
                                        <div class="hexIn">
                                            <img src={event4} alt="event image" />
                                        </div>
                                    </li>
                                    <li class="hex">
                                        <div class="hexIn">
                                            <img src={event1} alt="event image" />
                                        </div>
                                    </li>
                                    <li class="hex">
                                        <div class="hexIn">
                                            <img src={event2} alt="event image" />
                                        </div>
                                    </li>
                                    <li class="hex">
                                        <div class="hexIn">
                                            <img src={event3} alt="event image" />
                                        </div>
                                    </li>

                                </ul>
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

            {/* Counter Section */}
            <section className="CounSec">
                <div className="CountRow">
                    <div className="countDivfirst">
                        <div className="countDiv">
                            <i class="fa-solid fa-users"></i>
                            <h2 data-max={1500}>+</h2>
                            <h4>Happy Student</h4>
                        </div>
                    </div>
                    <div className="countDivfirst">
                        <div className="countDiv">
                            <i class="fa-solid fa-chalkboard-user"></i>
                            <h2 data-max={15}>+</h2>
                            <h4>Teachers</h4>
                        </div>
                    </div>
                    <div className="countDivfirst">
                        <div className="countDiv">
                            <i class="fa-solid fa-list-check"></i>
                            <h2 data-max={10}>+</h2>
                            <h4>Projects</h4>
                        </div>
                    </div>
                    <div className="countDivfirst">
                        <div className="countDiv">
                            <i class="fa-solid fa-laptop-code"></i>
                            <h2 data-max={30} id="test">+</h2>
                            <h4>Developers</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL SECTION */}
            <section className="TestiSection">
                <div className="container">
                    <div className="row">
                        <h2 className="headings text-center mb-4">
                            Testimonials
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="testiSec">
                                <div class="owl-carousel TestiCarousel owl-theme">
                                    <div class="item">
                                        <div className="TestimonialDiv">
                                            <img src={testi1} alt="testimonial img" className="testimonial_avatar" />
                                            <p className="testimonial_quotes">
                                                A perfect training session in which we get a hands- on experience. The more interesting part was that we have applied our basic theoretical knowledge in real life problems. Overall a wonderful session.
                                            </p>
                                            <div className="testimonial_info">
                                                <h4 className="testimonial_name">Krishna</h4>
                                                <span className="testimonial_role">Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div className="TestimonialDiv">
                                            <img src={testi1} alt="testimonial img" className="testimonial_avatar" />
                                            <p className="testimonial_quotes">
                                                A perfect training session in which we get a hands- on experience. The more interesting part was that we have applied our basic theoretical knowledge in real life problems. Overall a wonderful session.
                                            </p>
                                            <div className="testimonial_info">
                                                <h4 className="testimonial_name">Krishna</h4>
                                                <span className="testimonial_role">Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div className="TestimonialDiv">
                                            <img src={testi1} alt="testimonial img" className="testimonial_avatar" />
                                            <p className="testimonial_quotes">
                                                A perfect training session in which we get a hands- on experience. The more interesting part was that we have applied our basic theoretical knowledge in real life problems. Overall a wonderful session.
                                            </p>
                                            <div className="testimonial_info">
                                                <h4 className="testimonial_name">Krishna</h4>
                                                <span className="testimonial_role">Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div className="TestimonialDiv">
                                            <img src={testi1} alt="testimonial img" className="testimonial_avatar" />
                                            <p className="testimonial_quotes">
                                                A perfect training session in which we get a hands- on experience. The more interesting part was that we have applied our basic theoretical knowledge in real life problems. Overall a wonderful session.
                                            </p>
                                            <div className="testimonial_info">
                                                <h4 className="testimonial_name">Krishna</h4>
                                                <span className="testimonial_role">Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        {/* ***** FAQ Start ***** */}
                        <div className="col-md-6 offset-md-3">
                            <div className="text-center">
                                <h2 className="headings">FAQ</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="faq" id="accordion">
                                <div className="card">
                                    <div className="card-header" id="faqHeading-1">
                                        <div className="mb-0">
                                            <h5
                                                className="faq-title"
                                                data-toggle="collapse"
                                                data-target="#faqCollapse-1"
                                                data-aria-expanded="true"
                                                data-aria-controls="faqCollapse-1"
                                            >
                                                <span className="badge">1</span>What is Lorem Ipsum?
                                            </h5>
                                        </div>
                                    </div>
                                    <div
                                        id="faqCollapse-1"
                                        className="collapse"
                                        aria-labelledby="faqHeading-1"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type
                                                specimen book.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqHeading-2">
                                        <div className="mb-0">
                                            <h5
                                                className="faq-title"
                                                data-toggle="collapse"
                                                data-target="#faqCollapse-2"
                                                data-aria-expanded="false"
                                                data-aria-controls="faqCollapse-2"
                                            >
                                                <span className="badge">2</span> Where does it come from?
                                            </h5>
                                        </div>
                                    </div>
                                    <div
                                        id="faqCollapse-2"
                                        className="collapse"
                                        aria-labelledby="faqHeading-2"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random
                                                text. It has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqHeading-3">
                                        <div className="mb-0">
                                            <h5
                                                className="faq-title"
                                                data-toggle="collapse"
                                                data-target="#faqCollapse-3"
                                                data-aria-expanded="false"
                                                data-aria-controls="faqCollapse-3"
                                            >
                                                <span className="badge">3</span> Where does it come from?
                                            </h5>
                                        </div>
                                    </div>
                                    <div
                                        id="faqCollapse-3"
                                        className="collapse"
                                        aria-labelledby="faqHeading-3"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random
                                                text. It has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqHeading-4">
                                        <div className="mb-0">
                                            <h5
                                                className="faq-title"
                                                data-toggle="collapse"
                                                data-target="#faqCollapse-4"
                                                data-aria-expanded="false"
                                                data-aria-controls="faqCollapse-4"
                                            >
                                                <span className="badge">4</span> Where does it come from?
                                            </h5>
                                        </div>
                                    </div>
                                    <div
                                        id="faqCollapse-4"
                                        className="collapse"
                                        aria-labelledby="faqHeading-4"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random
                                                text. It has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="faqHeading-5">
                                        <div className="mb-0">
                                            <h5
                                                className="faq-title"
                                                data-toggle="collapse"
                                                data-target="#faqCollapse-5"
                                                data-aria-expanded="false"
                                                data-aria-controls="faqCollapse-5"
                                            >
                                                <span className="badge">5</span> Where does it come from?
                                            </h5>
                                        </div>
                                    </div>
                                    <div
                                        id="faqCollapse-5"
                                        className="collapse"
                                        aria-labelledby="faqHeading-5"
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random
                                                text. It has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old.
                                            </p>
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

export default Mainpage;