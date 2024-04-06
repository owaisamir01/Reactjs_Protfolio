import React from "react";
import image from "../src/images/home.png"
import { NavLink } from "react-router-dom";
import Common from "./Common";
import homeimage from "../src/images/home.png"
function Home(){
    return(
        <>
        <Common 
        name="Welcome to Home Page"
        img={homeimage} 
        visit="/Services"
        btname="Get Started"
        />
        </>
    )
} export default Home