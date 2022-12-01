import React, { useContext } from 'react'
import { BsPersonSquare } from "react-icons/bs";
import { data } from '../Store';
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";

const Navbar = () => {

    let {mode,setMode}=useContext(data)

    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg shadow" style={{background:'linear-gradient(to right, #33ccff 0%, #6600cc 100%)'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><BsPersonSquare style={{fontSize:'30px',background: 'linear-gradient(to right, #000066 0%, #ffffff 100%)'}} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-center mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contact">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center" role="search">
                            <button className='bg-warning rounded' onClick={()=>setMode(!mode)}>{mode?<BsFillSunFill style={{color:'blue'}} />:<BsFillMoonFill style={{color:'blue'}} />}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar