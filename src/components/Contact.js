import React from 'react';
import { useFormik } from 'formik';
//we need usestate to changes state variable 
//object to maintain the value of form state

const initialValues = {
    name: 'Garima',
    email: '',
    number: '',
    query: ''
}

const onSubmit =
    values => {

        console.log('Form data', values)
        // console.log('Form data', values) 


    }

const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }


    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-B0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Valid email format'
    }

    if (!values.number) {
        errors.number = 'Required'
    }

    if (!values.query) {
        errors.query = 'Required'
    }



    return errors

}


function Contact() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('Form values', formik.values)
    console.log('Form Errors', formik.errors)



    /*initialValues:{           //initial object is mandatory
        name:'',
        email:'',
        number:'',
        query:'' */

    //},  we add on change prop and value prop

    /*onSubmit: values => {
    console.log('Form data', values)
    },
    //method validate 
    
    validate: values => {
        //values.name values.email values.number values.query
        // errors.name errors.email errors.number errors.query
        //errors.name ='this field is required'
       let errors = {}
       if(!values.name) {
        errors.name ='Required'
       }
       if(!values.email) {
        errors.email ='Required'
       } else if(!/^[A-Z0-9._%+-]+@[A-B0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email ='Invalid email format'
       }
       
       if(!values.number) {
        errors.number ='Required'
       }
       
       if(!values.query) {
        errors.query ='Required'
       }
       
    
    return errors
    }
    })    //returns an object which are storing in varible formik
    
    //console.log('Form values',formik.values)   // it will access the data
    //after clicking submit button we used handling 
    
    */


    return (

        <div>

            <section class="contact" id="contact">

                <h1 class="heading"> <span>Contact</span> US </h1>

                <div class="row">

                    {/*<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> */}
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8331.052564621341!2d77.37499482425513!3d28.606492465121974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8888cb6fef%3A0x38e52dc85b27b66f!2sSource%20Soft%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1657283795745!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                    <form onSubmit={formik.handleSubmit} action="">

                        <h3>Get In Touch</h3>
                        <div class="inputBox">

                            <span class="fas fa-user"></span>
                            <div className='form-control'>
                                <input type="text" placeholder="Name" name='name' onChange={formik.handleChange} value={formik.values.name} />
                                {formik.errors.name ? <div className='error'>{formik.errors.name} </div> : null}
                            </div>
                        </div>
                        <div class="inputBox">

                            <span class="fas fa-envelope"></span>
                            <div className='form-control'>
                                <input type="email" placeholder="Email" name='email' onChange={formik.handleChange} value={formik.values.email} />
                                {formik.errors.email ? <div className='error'>{formik.errors.email} </div> : null}
                            </div>
                        </div>
                        <div class="inputBox">

                            <span class="fas fa-phone"></span>
                            <div className='form-control'>
                                <input type="number" placeholder="Number" name='number' onChange={formik.handleChange} value={formik.values.number} />
                                {formik.errors.number ? <div className='error'>{formik.errors.number}</div> : null}
                            </div>
                        </div>
                        <div class="inputBox">

                            <span class="fas fa-box"></span>
                            <div className='form-control'>
                                <input type="text" placeholder="Your Message/Query" name='query' onChange={formik.handleChange} value={formik.values.query} />
                                {formik.errors.query ? <div className='error'>{formik.errors.query}</div> : null}
                            </div>
                        </div>
                        <input type="submit" value="contact now" class="btn" />
                    </form>

                </div>

            </section>
        </div>
    )
}

export default Contact