//basic imports
import React from 'react';

//import components
import Header from './header';
import Footer from './footer';
import SubmitForm from './submit';

//import stylesheet
import './home.css';

const Home = () => {
    return (
        <div className="app">
            <Header></Header>
            <main>
                <h1> Welcome to my app! </h1>
                <p> This is the start of something great!</p>
                <SubmitForm></SubmitForm>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;