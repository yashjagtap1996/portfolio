import React, { useContext } from 'react'
import { data } from '../Store'

const Home = () => {

  let { mode, setMode } = useContext(data)

  return (
    <>
      <div id='Home'>
        <div className={`container-fluid bg-${mode ? 'dark' : 'light'}`} style={{marginTop:'55px'}}>
          <div className="row align-items-center">
            <div className={`col-lg-6 text-${mode ? 'light' : 'dark'} `}>
              <h1>FrontEnd Developer</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla repellendus beatae laborum quidem, veniam consequatur.</p>
            </div>
            <div className="col-lg-6">
              <img src="Images/data-analysis-design-concept-vector-20636172-removebg-preview.png" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home