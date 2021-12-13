import React, { Component } from 'react'
import {
    API_DOMAIN,
    API_KEY,
    URL
} from '../config/api';
import Dropdowns from "../components/Dropdowns"
import Convertresult from "../components/Convertresult"

class CurrencyConverter extends Component {

    constructor(props) {
        super(props);
        this.default = {
            from: 'USD',
            into: 'INR',
            loading: false,
            amount: 1,
            conversionResult: '',
            conversionRate: ''
        }
        this.state = this.default
    }

    convertCurrency = async ({ from, into, amount }) => {
        this.setState({ loading: true });
        let url = `${API_DOMAIN}${from}_${into}${URL}${API_KEY}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        const conversionRate = parsedData[`${from}_${into}`];
        console.log(conversionRate)
        const conversionResult = conversionRate * amount;
        this.setState({
            conversionRate: conversionRate.toFixed(2),
            conversionResult: conversionResult.toFixed(2),
            loading: false
        })
    }

    handleInput = (event) => {
        this.setState({ amount: event.target.value });
    }

    handleFrom = (event) => {
        this.setState({ from: event.currentTarget.value });
    }

    handleInto = (event) => {
        this.setState({ into: event.currentTarget.value });
    }

    handleReset = () => {
        this.setState(this.default)
    }

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
            loading
        } = this.state
        return (
            <>
                <div className='container-fluid shadow'>
                    <input
                        className="form-control-lg mt-5 shadow amount bg-dark"
                        placeholder="Enter Amount"
                        value={amount}
                        type="number"
                        onChange={this.handleInput}
                    />
                    <div className='fromdrop'>
                        <Dropdowns
                            labelName="From"
                            handleChange={this.handleFrom}
                            value={from}
                        ></Dropdowns>
                    </div>
                    <div className='text-center swap'>
                        <button className="btn shadow text-center" onClick={this.handleSwitch}><i class="fas fa-sort"></i></button>
                    </div>
                    <div className='intodrop'>
                        <Dropdowns
                            labelName="Into"
                            handleChange={this.handleInto}
                            value={into}
                        ></Dropdowns>
                    </div>
                    <div className="mt-5 text-center shadow">
                        <button
                            className='btn btn-scolor btn-lg'
                            disabled={amount === "0" || amount === ""}
                            onClick={() => this.convertCurrency(this.state)}
                        >Convert</button>
                    </div>
                    <div className="mt-4 text-center shadow">
                        <button
                            className='btn btn-rcolor btn-lg'
                            text="Reset"
                            onClick={this.handleReset}
                        >Reset <i className="fas fa-redo-alt"></i></button>
                    </div>
                    <div className='mt-5 text-center'>
                        <Convertresult
                            Loading={loading}
                            result={conversionResult}
                            rate={conversionRate}
                        ></Convertresult>
                    </div>
                </div>
            </>
        )
    }
}

export default CurrencyConverter