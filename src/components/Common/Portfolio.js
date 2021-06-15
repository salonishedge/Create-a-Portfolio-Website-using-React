import React,{Component} from 'react';
import PortfolioSection from './PortfolioSection';
import img1 from '../assets/img/portfolio/1.jpg';
import img2 from '../assets/img/portfolio/2.jpg';
import img3 from '../assets/img/portfolio/3.jpg';
import img4 from '../assets/img/portfolio/4.jpg';
import img5 from '../assets/img/portfolio/5.jpg';
import img6 from '../assets/img/portfolio/6.jpg';

const portfolio=[
    {title:'Thread', subtitle:'So I married an antifan',image:img1},
    {title:'Explore', subtitle:'The Heirs',image:img2},
    {title:'Finish', subtitle:'She was pretty',image:img3},
    {title:'Brand', subtitle:'Doom at your Service',image:img4},
    {title:'Marketting', subtitle:'True Beauty',image:img5},
    {title:'Window', subtitle:'Legends of the sea',image:img6},
    
];

class Portfolio extends Component{
    render(){
        return(
            <div>
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portfolio.map((item, index) =>{
                        return <PortfolioSection {...item} key={index}/>
                    })}
                    
                   
                </div>
            </div>
            </section>
            </div>

        )
    }
}

export default Portfolio;