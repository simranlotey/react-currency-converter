import React from 'react'
import Spinner from './Spinner'

function Convertresult({ Loading, result, rate }) {
    return (
        <>
            {Loading ? (
                <Spinner />
            ) : (
                result &&
                rate && (
                    <>
                        <h1 className="result">72.87</h1>
                        <h4 className="rate ">45.87</h4>
                    </>
                )
            )}
        </>
    )
}

export default Convertresult
