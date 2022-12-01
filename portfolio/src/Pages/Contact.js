import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { AiFillGithub } from "react-icons/ai";
import Heading from '../Common/Heading';
import axios from 'axios'
import AOS from "aos";


const Contact = () => {

    let {register,handleSubmit,formState:{errors},reset}=useForm()

    let onsubmit=(data,e)=>{
        e.preventDefault()
        console.log(data);
        axios.post("https://personal-b0fea-default-rtdb.firebaseio.com/contactform.json",data)
        reset()
    }

    
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
   

  return (
    <>
        <div id="Contact" >
            <div className="container-fluid px-5 bg-warning" >
                <Heading h1="Contact" h2="Share Your Info" />
                <div className="row justify-content-between">
                    <div className="col-md-5">
                        <h1>Let's get in touch</h1>
                        <p>I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>

                        <br />
                        <h4>Living In:</h4>
                        <p>Nagpur,Maharashtra</p>
                        <br />
                        <h4>Call:</h4>
                        <p> (+91) 7057358048</p>
                        <br />
                        <a href="#Home" target="_blank" style={{color:'black'}}><AiFillGithub style={{fontSize:'35px'}} /></a> 
                        <br /><br />
                    </div>
                    <div className="col-md-6 shadow p-3" data-aos="flip-left">
                        <form action=""  onSubmit={handleSubmit(onsubmit)}>
                            <label htmlFor="" className='form-label'>Enter Name</label>
                            <input type="text" name='Name' {...register("Name",{required:"This Field is Required!"})} className='form-control'  />
                            <p className='text-danger'>{errors.Name?.message}</p>
                            <label htmlFor="" className='form-label'>Enter Email</label>
                            <input type="email" name='Email' {...register("Email",{required:"This Field is Required!"})} className='form-control' />
                            <p className='text-danger'>{errors.Email?.message}</p>
                            <label htmlFor="" className='form-label'>How Can I Help You</label>
                            <input type="text" name='Message' {...register("Message",{required:"This Field is Required!"})} className='form-control' />
                            <p className='text-danger'>{errors.Message?.message}</p>
                            
                            <input className="btn btn-outline-success" type="submit" />
                        </form>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact