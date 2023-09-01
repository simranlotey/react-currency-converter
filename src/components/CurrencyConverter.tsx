import React, { useState, useEffect } from "react";
import axios from "axios";
import { endpointPath, API_KEY } from "../config/api";
import Dropdowns from "./Dropdown";
import ConvertResult from "./ConvertResult";
import moment from "moment";

const CurrencyConverter: React.FC = () => {
  const [from, setFrom] = useState<string>("🇺🇸 USD - United States Dollar");
  const [into, setInto] = useState<string>("🇮🇳 INR - Indian Rupee");
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const [conversionResult, setConversionResult] = useState<string>("");
  const [conversionRate, setConversionRate] = useState<string>("");
  const [amountValue, setAmountValue] = useState<string>("");
  const [fromField, setFromField] = useState<string>("");
  const [intoField, setIntoField] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const convertCurrency = async (
    from: string,
    into: string,
    amount: number
  ) => {
    const amountValue =
      typeof amount === "string" ? parseFloat(amount) : amount;

    if (amountValue === 0 || isNaN(amountValue) || amountValue < 0) {
      setLoading(false);
      setConversionResult("");
      setConversionRate("");
      return;
    }
    setLoading(true);
    const fromv = from.split(" ")[1].trim();
    const intov = into.split(" ")[1].trim();
    const url = endpointPath(fromv, intov, amountValue);
    try {
      const response = await axios.get(url, {
        headers: { apikey: API_KEY },
      });
      const parsedData = response.data;
      const conversionRate = parsedData.info.rate.toFixed(2);
      const conversionResult = parsedData.result.toFixed(2);
      const amountValue = parsedData.query.amount;
      const fromField = parsedData.query.from;
      const intoField = parsedData.query.to + into.split(" ")[0].trim();
      const parsedDate = parsedData.date;
      const date = moment(parsedDate).format("DD/MM/YYYY");
      setConversionRate(conversionRate);
      setConversionResult(conversionResult);
      setAmountValue(amountValue);
      setFromField(fromField);
      setIntoField(intoField);
      setDate(date);
    } catch (error) {
      console.error("Error while converting currency:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convertCurrency(from, into, amount);
  }, [from, into, amount]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmount(Number(value));
  };

  const handleFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    setFrom(value);
  };

  const handleInto = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    setInto(value);
  };

  const handleSwitch = () => {
    setFrom(into);
    setInto(from);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="app">
          <input
            className="form-control-lg amount bg-dark shadow"
            placeholder="Enter Amount"
            value={amount}
            type="number"
            onChange={handleInput}
          />
          <div className="from">
            <Dropdowns
              labelName="From"
              handleChange={handleFrom}
              value={from}
            ></Dropdowns>
          </div>
          <div className="swap">
            <button className="btn swap-btn shadow" onClick={handleSwitch}>
              <i className="fas fa-sort"></i>
            </button>
          </div>
          <div className="into">
            <Dropdowns
              labelName="Into"
              handleChange={handleInto}
              value={into}
            ></Dropdowns>
          </div>
          <div className="result">
            <ConvertResult
              loading={loading}
              result={parseFloat(conversionResult)}
              rate={parseFloat(conversionRate)}
              into={intoField}
              from={fromField}
              amount={parseFloat(amountValue)}
              date={date}
            ></ConvertResult>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default CurrencyConverter;
