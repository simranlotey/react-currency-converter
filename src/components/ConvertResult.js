import React from "react";
import Spinner from "./Spinner";

function ConvertResult({ Loading, result, rate, into, from, amount, date }) {
  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        result &&
        rate && (
          <>
            <p className="value">
              {amount} {from}=
            </p>
            <p className="answer">
              {result} {into}
            </p>
            <p className="rate">
              Rate={rate}
            </p>
            <p className="date">
              Last updated on: {date}
            </p>
          </>
        )
      )}
    </>
  );
}

export default ConvertResult;
