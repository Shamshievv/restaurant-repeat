import React from 'react';
import Hero from "../Hero/Hero";
import About from "../About/About";
import Best from "../BestSellers/Best";
import Visit from "../Visit/Visit";
import Modern from "../ModernInterier/ModernInterier";
import MeinMenu from "../MainMenu/MainMenu";
const MainN = () => {
    return (
        <div>
           <Hero/>
           <About/>
            <Best/>
            <MeinMenu/>
            <Modern/>
            <Visit/>
        </div>
    );
};
export default MainN;