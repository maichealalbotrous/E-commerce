import React from 'react';
import './HomePage.css';
import Header from '../Section/Header/Header';
import Hero from '../Section/Hero/Hero';
import Features from '../Section/Features/Features';
import Products from '../Section/Products/Products';
import Footer from '../Section/Footer/Footer';

const HomePage = () => {
    return (
        <div>
        <Header/> 
        <Hero/>  
        <Features/>
        <Products/>
        <Footer/>
        </div>
    );
}

export default HomePage;
