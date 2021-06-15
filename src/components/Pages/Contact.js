import React,{Component} from 'react';

import {withFormik} from 'formik';


class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            email: '',
            phone:'',
            message:'',
        }
    }

    submitForm=(e)=>{
        alert("Form Submitted");
    }
    render(){
        return(
                <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form id="contactForm">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" value={this.state.name} onChange={e=>this.setState({name:e.target.value})} />
                                    
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}  />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" value={this.state.phone} onChange={e=>this.setState({phone:e.target.value})} />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" value={this.state.message} onChange={e=>this.setState({message:e.target.value})}></textarea >
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" 
                            type="submit" onClick={e=>this.submitForm (e)}>Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }

}

export default withFormik({
    mapPropsToValues: () =>({
        name:'',
        email:'',
        phone:'',
        message:''

    }),
    validate:values =>{
        const errors = {};
        Object.keys(values).map(v =>{
            if(!values[v]){
                errors[v]="Required";
            }
        })
        return errors;
    },
    handleSubmit:(values,{setSubmitting}) => {
        alert("You have already submitted the form")
    }


})(Contact);