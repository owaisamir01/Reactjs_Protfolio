import React from "react";
import Common from "./Common";
import image from "../src/images/about.png"

function About(){
    return(
        <>
        <Common
        name="Welcome to About Page"
        img={image} 
        visit="/contact"
        btname="Contact Now"
        />
        </>
            )
} export default About