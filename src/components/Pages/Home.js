import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Services from '../Pages/Services';
import Portfolio from '../Common/Portfolio';
import About from '../Pages/About';
import Teams from '../Pages/Teams';
import Contact from '../Pages/Contact';

class Home extends Component{
    render(){
        return(
        <div>
            <Header
            title="Welcome to Our Studio!"
            subtitle="IT'S NICE TO MEET YOU"
            buttonText="Tell me more"
            link="/services"
            showButton={true}
            image={image}/>
            <Services/>
            <Portfolio/>
            <About/>
            <Teams/>
            <Contact/>
        </div>
        )    

    }
}

export default Home;