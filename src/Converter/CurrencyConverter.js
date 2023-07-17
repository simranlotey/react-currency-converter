import React, { Component } from "react";
import axios from "axios";
import { endpointPath, API_KEY } from "../config/api";
import Dropdowns from "../components/Dropdowns";
import ConvertResult from "../components/ConvertResult";
import moment from "moment";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    this.default = {
      from: "🇺🇸 USD - United States Dollar",
      into: "🇮🇳 INR - Indian Rupee",
      loading: false,
      amount: 1,
      conversionResult: "",
      conversionRate: "",
    };
    this.state = this.default;
  }

  convertCurrency = async ({ from, into, amount }) => {
    this.setState({ loading: true });
    const fromv = from.split(" ")[1].trim();
    const intov = into.split(" ")[1].trim();
    let url = endpointPath(fromv, intov, amount);
    const response = await axios.get(url, {
      headers: { apikey: API_KEY },
    });
    const parsedData = await response.data;
    const conversionRate = parsedData.info.rate.toFixed(2);
    const conversionResult = parsedData.result.toFixed(2);
    const amountValue = parsedData.query.amount;
    const fromField = parsedData.query.from;
    const intoField = parsedData.query.to + into.split(" ")[0].trim();
    const parsedDate = parsedData.date;
    const date = moment(parsedDate).format("DD/MM/YYYY");
    this.setState({
      conversionRate: conversionRate,
      conversionResult: conversionResult,
      loading: false,
      amountValue,
      fromField,
      intoField,
      date,
    });
  };

  handleInput = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleFrom = (event) => {
    this.setState({ from: event.currentTarget.value });
  };

  handleInto = (event) => {
    this.setState({ into: event.currentTarget.value });
  };

  handleReset = () => {
    this.setState(this.default);
  };

  handleSwitch = () => {
    const { from, into } = this.state;
    this.setState({ from: into, into: from });
  };

  render() {
    const {
      from,
      into,
      amount,
      conversionRate,
      conversionResult,
      loading,
      amountValue,
      fromField,
      intoField,
      date,
    } = this.state;
    return (
      <>
        <div className="container-fluid">
          <div className="part-1">
            <input
              className="form-control-lg amount bg-dark shadow"
              placeholder="Enter Amount"
              value={amount}
              type="number"
              onChange={this.handleInput}
            />
            <div className="from">
              <Dropdowns
                labelName="From"
                handleChange={this.handleFrom}
                value={from}
              ></Dropdowns>
            </div>
            <div className="swap">
              <button
                className="btn swap-btn shadow"
                onClick={this.handleSwitch}
              >
                <i className="fas fa-sort"></i>
              </button>
            </div>
            <div className="into">
              <Dropdowns
                labelName="Into"
                handleChange={this.handleInto}
                value={into}
              ></Dropdowns>
            </div>
            <div className="custom-button">
              <button
                className="btn custom-btn shadow"
                disabled={amount === "0" || amount === "" || amount < 0}
                onClick={() => this.convertCurrency(this.state)}
              >
                Convert
              </button>
            </div>
            <div className="custom-button">
              <button
                className="btn custom-btn shadow"
                text="Reset"
                onClick={this.handleReset}
              >
                Reset <i className="fas fa-redo-alt"></i>
              </button>
            </div>
            <div className="result">
              <ConvertResult
                Loading={loading}
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
      </>
    );
  }
}

export default CurrencyConverter;
