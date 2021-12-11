import React from 'react'
import spinner from './Images/spinner.gif'

function Spinner() {
    return (
        <div className='text-center'>
            <img src={spinner} alt='' width={"150px"} height={"150px"} />
        </div>
    )
}

export default Spinner
