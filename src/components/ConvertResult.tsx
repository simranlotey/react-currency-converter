import React from "react";
import Loading from "./Loading";

interface ConvertResultProps {
  loading: boolean;
  result: number | null;
  rate: number | null;
  into: string;
  from: string;
  amount: number;
  date: string;
}

function ConvertResult({
  loading,
  result,
  rate,
  into,
  from,
  amount,
  date,
}: ConvertResultProps) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        result !== null &&
        rate !== null && (
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
