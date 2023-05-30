import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Footer from '../Components/Footer';

export default function index() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
