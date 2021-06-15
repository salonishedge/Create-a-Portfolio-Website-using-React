import React,{Component} from 'react';
import SingleService from '../Common/SingleService';

const services=[
    {title:'E-commerce' , description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries', icon:'fa-shopping-cart'},
    {title:'Responsive Design' , description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',icon:'fa-laptop'},
    {title:'Security' , description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',icon:'fa-lock'}
]

class Services extends Component{
    render(){
        return(
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    {
                        services.map((service,index)=> {
                            return <SingleService{...service} key={index}/>
                        })}
                    
                    
                </div>
            </div>
        </section>
        )
    }
}

export default Services;