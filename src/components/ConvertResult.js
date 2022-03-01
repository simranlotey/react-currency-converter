import React from 'react'
import Spinner from './Spinner'



function Result(result, rate) {
    return <>
        <h1 className="result">{result}</h1>
        <h4 className="rate ">Current Rate = {rate}</h4>
    </>
}

function ConvertResult({ Loading, result, rate }) {
    return (
        <>
            {Loading ? (<Spinner />) : result && rate && (<Result result={result} rate={rate} />)}
        </>
    )
}

export default ConvertResult
