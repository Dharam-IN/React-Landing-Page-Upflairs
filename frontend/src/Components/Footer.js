import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="MainFooter">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li>
                                    <NavLink to={"/about"}>
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/services"}>
                                        Our Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/policy"}>
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/visitweb"}>
                                        Visit website
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li>
                                    <NavLink to={"/faq"}>
                                        FAQ
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/shipping"}>
                                        shipping
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/returns"}>
                                        returns
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/order"}>
                                        order status
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/payment"}>
                                        payment options
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li>
                                    <NavLink to={"/download"}>
                                        download
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>
                                        Changelog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/linkedin"}>
                                        Linkedin
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>
                                        About us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#">
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-x-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="FooterCopyright">
                                © 2024 Upflairs Private Limited
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;
