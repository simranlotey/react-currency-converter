import React, { useState, useEffect } from "react";
import axios from "axios";
import { endpointPath, API_KEY } from "../config/api";
import Dropdowns from "./Dropdowns";
import ConvertResult from "./ConvertResult";
import moment from "moment";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("🇺🇸 USD - United States Dollar");
  const [into, setInto] = useState("🇮🇳 INR - Indian Rupee");
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState("");
  const [conversionRate, setConversionRate] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [fromField, setFromField] = useState("");
  const [intoField, setIntoField] = useState("");
  const [date, setDate] = useState("");

  const convertCurrency = async (from, into, amount) => {
    if (amount === 0 || amount === "" || amount < 0) {
      setLoading(false);
      setConversionResult("");
      setConversionRate("");
      return;
    }
    setLoading(true);
    const fromv = from.split(" ")[1].trim();
    const intov = into.split(" ")[1].trim();
    const url = endpointPath(fromv, intov, amount);
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

  const handleInput = (event) => {
    const { value } = event.target;
    setAmount(value);
  };

  const handleFrom = (event) => {
    const { value } = event.currentTarget;
    setFrom(value);
  };

  const handleInto = (event) => {
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
              result={conversionResult}
              rate={conversionRate}
              into={intoField}
              from={fromField}
              amount={amountValue}
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
