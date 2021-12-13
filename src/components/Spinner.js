import React from 'react'
import spinner from './Images/spinner.gif'

function Spinner() {
    return (
        <div className='text-center'>
            <img src={spinner} alt='' width={"60px"} style={{ "marginBottom": "30px" }} />
        </div>
    )
}

export default Spinner
