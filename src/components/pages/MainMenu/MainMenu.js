import React, {useState} from 'react';
import titleImg from "../../../images/hero-wave.svg"
import titleRight from "../../../images/hero-wave-right.svg"
import {Foods} from "../../../data/Data";
import {Link} from "react-router-dom";
import {BsArrowRightShort} from "react-icons/bs";


const MeinMenu = () => {

    const [selectedTab, setSelectedTab] = useState(1);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };


    return (
        <div id="mainMenu">
            <div className="container">
                <div className="mainMenu">
                    <div className="mainMenu--title">
                        <div className="mainMenu--title__titleBlock">
                            <img src={titleImg} alt="" className="mainMenu--title__titleBlock--left"/>
                        </div>
                        <h1 className="mainMenu--title__name">Main Menu</h1>
                        <div className="mainMenu--title__titleBlock--titleBlock">
                            <img src={titleRight} alt="" className="mainMenu--title__titleBlock--left"/>
                        </div>
                    </div>

                    <h1 className="mainMenu--aboutFoods">Exceptional Quality. Delightfully Delicious</h1>
                    <div className="mainMenu--block">
                        <div className="mainMenu--block--blockChild">
                            {
                                Foods.map(el => (
                                    <div className="mainMenu--block--blockChild__foods">
                                        <div className="mainMenu--block--blockChild__foods--allBtn">
                                            <div
                                                style={{
                                                    background: selectedTab === el.id ? "#EF272C" : "",
                                                }}
                                                className={selectedTab === el.id ? 'active mainMenu--block--blockChild__foods--allBtn__btn' : 'mainMenu--block--blockChild__foods--allBtn__btn'}
                                                onClick={() => {
                                                    handleTabClick(el.id)
                                                }}>
                                                <button style={{
                                                    border: selectedTab === el.id ? "none" : "",
                                                }}>{el.title}</button>
                                                <div style={{
                                                    transition: ".4s",
                                                    left: selectedTab === el.id ? "320px" : "",
                                                }} className="mainMenu--block--blockChild__foods--allBtn__btn--line"/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mainMenu--block--foodsName">
                            {
                                Foods.map(el => (
                                    <div className="mainMenu--block__onlyFood">
                                        {
                                            selectedTab === el.id && el.nameFoots.map(el => (
                                                <div className="mainMenu--block__onlyFood__parent">
                                                    <div className="mainMenu--block__onlyFood__parent--about">
                                                        <h1>{el.name}</h1>
                                                        <div/>
                                                        <h3> ${el.price}</h3>
                                                    </div>
                                                    <div className="mainMenu--block__onlyFood__parent--order">
                                                        <p>{el.text}</p>
                                                        <Link to={"/foods"}>
                                                            <button>Order Now</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Link to={"/AboutMenu"}>
                        <div className="mainMenu--parentBtn">
                            <div className="mainMenu--parentBtn__topLine"/>
                            <button>View Full menu<BsArrowRightShort className="mainMenu--parentBtn__btn"/></button>
                            <div className="mainMenu--parentBtn__buttonLine"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MeinMenu;