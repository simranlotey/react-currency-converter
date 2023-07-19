import React from "react";
import Loading from "./Loading";

function ConvertResult({ loading, result, rate, into, from, amount, date }) {
  return (
    <>
      {loading ? (
        <Loading />
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
            <p className="rate">Rate={rate}</p>
            <p className="date">Last updated on: {date}</p>
          </>
        )
      )}
    </>
  );
}

export default ConvertResult;
