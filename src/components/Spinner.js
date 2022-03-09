import React from 'react'
import spinner from './Images/spinner.gif'


const image = {
    "marginBottom": "30px",
    "width": "60px"
}
function Spinner() {
    return (
        <div className='text-center'>
            <img src={spinner} alt="" style={image} />
        </div>
    )
}

export default Spinner
