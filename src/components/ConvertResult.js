import React from 'react'
import Spinner from './Spinner'


function ConvertResult({ Loading, result, rate }) {
    return (
        <>
            {Loading ? (
                <Spinner />
            ) : (
                result &&
                rate && (
                    <>
                        <h1 className="result">{result}</h1>
                        <h4 className="rate ">{rate}</h4>
                    </>
                )
            )}
        </>
    )
}

export default ConvertResult
