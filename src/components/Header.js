import React from 'react'
import '../App.css';
import { Header } from '../config/api';

function header() {
    return (
        <div className="waviy">
            <span className="text-center">{Header}</span>
        </div>
    )
}

export default header
