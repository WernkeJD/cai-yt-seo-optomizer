import React from 'react';
import Header from './header';
import Footer from './footer';

const app = () => {
    return (
        <div className="app">
            <Header></Header>
            <main>
                <h1> Welcome to my app! </h1>
                <p> This is the start of something great!</p>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default app;