import React from 'react';
import image1 from "../../../images/restuarant1.png"
import image2 from "../../../images/restaurant2.png"
import image3 from "../../../images/restaurant3.png"
import image4 from "../../../images/restaurant4.png"
import image5 from "../../../images/restaurant5.png"
import Vector from "../../../images/hero-wave.svg"
import Vector1 from "../../../images/hero-wave-right.svg"
const ModernInterier = () => {
    return (
        <section id="modern">
            <div className="container">
                <div className="line"/>
                <div className="modern--text">
                    <div className="modern--text__block"><img src={Vector} alt="" className="modern--text__block--img"/> </div>
                    <h1 className="modern--text__title">Modern Interior</h1>
                    <div className="modern--text__block"><img src={Vector1} alt="" className="modern--text__block--img"/>
                    </div>
                </div>

                <div className="modern">
                    <div className="modern--img"><img src={image1} alt="" className='modern--img-img1'/></div>
                    <div className="modern--image" style={{padding:" 10px 0"}}><img src={image2} alt="" className='modern--image2'/>
                        <div className="modern--image__fon"><img src={image3} alt="" className='modern--image__fon3'/> <img src={image4} alt="" className='modern--image__fon4'/></div>
                    </div>
                    <div className="modern--img" style={{marginLeft:"6px"}}><img src={image5} alt="" className='modern--img5'/></div>

                    <div className="modern--img"><img src={image1} alt="" className='modern--img-img1'/></div>
                    <div className="modern--image">
                        <img src={image2} alt="" className='modern--image2'/>
                        <div className="modern--image__fon" style={{paddingTop:"20px"}} >
                            <img src={image3} alt="" className='modern--image__fon3'/>
                            <img src={image4} alt="" className='modern--image__fon4'/></div>
                    </div>
                    <div className="modern--img"><img src={image5} alt="" className='modern--img5'/></div>


                </div>
            </div>
        </section>
    );
};

export default ModernInterier;