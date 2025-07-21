// import { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
// import Icons from './Icons';
import Footer from './Footer';
import Service from './Service';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


export default function Main() {
    return (
        <div >
            <Nav />
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="service"><Service /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            <Footer />
        </div>
    );
}