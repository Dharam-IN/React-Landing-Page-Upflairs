import React from 'react';
import bannerImg from "../images/banner.png";

const Banner = () => {
  return (
    <>
        <section className='bannerSec'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="banner-content">
                            <h3>Learn Explore Upskill</h3>
                            <p>Hack2skill is the largest and fastest-growing community of technology innovators, including startups, working professionals, freelancers, and student innovators.</p>
                            <div className="buttons">
                                <button class="BannerButton"  type='button'>Explore Hackathon</button>
                                <button class="BannerButton"  type='button'>Organize Hackathon</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="banner_img">
                            <img src={bannerImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Banner;
