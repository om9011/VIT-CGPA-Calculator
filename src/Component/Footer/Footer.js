import React from 'react';
import './Footer.css';
import profile from "./../../Assets/profile.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="profile">
                <div className="profile-info">
                    <img
                        src={profile}
                        alt="Om Gore"
                        className="profile-picture"
                    />
                    <div>
                        <h3>Om Gore</h3>
                        <p>B.Tech Engineer at <br />Vishwakarma Institute of Technology</p>
                        <p>Email: omgore4307@gmail.com</p>
                        <p>
                            <a href='https://www.linkedin.com/in/om-gore-5783a522a/'>
                                <i className='bx bxl-linkedin'></i>LinkedIn
                            </a>
                        </p>
                        <p>
                            <a href='https://github.com/om9011'>
                                <i className='bx bxl-github'></i>Github
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-links">
                <a href="#privacy-policy">Privacy Policy</a>
                <a href="#terms-of-service">Terms of Service</a>
                <a href="#contact-us">Contact Us</a>
            </div>
            <div className="profile">
            <div className="profile-info">
                    <img
                        src={profile}
                        alt="Om Gujarathi"
                        className="profile-picture"
                    />
                    <div>
                        <h3>Om Gujarathi</h3>
                        <p>B.Tech Engineer at <br />Vishwakarma Institute of Technology</p>
                        <p>Email: veryhappyom@gmail.com</p>
                        <p>
                            <a href='https://www.linkedin.com/in/om-gore-5783a522a/'>
                                <i className='bx bxl-linkedin'></i>LinkedIn
                            </a>
                        </p>
                        <p>
                            <a href='https://github.com/om9011'>
                                <i className='bx bxl-github'></i>Github
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;
