import React from "react"
import photoGrid from "../images/photogrid.png"


export default function Hero() {
    return (
        <section className="heroDiv">
            <img src={photoGrid} alt="" className="hero--photogrid" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>

        </section>
    )
}