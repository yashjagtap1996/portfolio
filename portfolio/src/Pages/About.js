import React, { useContext, useEffect } from 'react'
import Heading from '../Common/Heading'
import { data } from '../Store'
import AOS from "aos";

const About = () => {

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])

    let { mode, setMode } = useContext(data)

    let obj = [
        {
            id: 1,
            heading: "Name:",
            content: "Yash Jagtap",
            colour: "primary"
        },
        {
            id: 2,
            heading: "Email:",
            content: "yashjagtap918@gmail.com",
            colour: "success"
        },
        {
            id: 3,
            heading: "Date of Birth:",
            content: "25 DEC 1996",
            colour: "warning"
        },
        {
            id: 4,
            heading: "From",
            content: "Yavatmal",
            colour: "danger"
        }
    ]

    return (
        <>
            <div id='About'>
                <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark  '} `}>
                    <Heading h1="About Me" h2="Know Me More" />

                    <div className="row align-items-center">
                        <div className="col-8">
                            <h1>Hi, I'm Yash Jagtap</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam modi porro molestias necessitatibus officia, non earum iure delectus et!</p>
                        </div>
                        <div className="col-4">
                            <img src="Images/thoughtworks-gif_dribbble.gif" alt="" width="100%" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        {
                            obj.map((e) => {
                                return (
                                    <div className="col-sm-6 col-xl-3" key={e.id} data-aos="fade-left">
                                        <div className={`card p-2 text-bg-${e.colour} mb-3`} >
                                            <div className="card-header">{e.heading}</div>
                                            <div className="card-body">
                                                <h6 className="card-title">{e.content}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default About