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
                        <h1 className="result">{result}</h1>
                        <h4 className="rate ">Current Rate = {rate}</h4>
                    </>
                )
            )}
        </>
    )
}

export default Convertresult
