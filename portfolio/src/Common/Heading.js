import React from 'react'

const Heading = (props) => {
    return (
        <>
            <div className='text-center p-3'>
                <h5>{props.h1}</h5>
                <h1>{props.h2}</h1>
            </div>
        </>
    )
}

export default Heading