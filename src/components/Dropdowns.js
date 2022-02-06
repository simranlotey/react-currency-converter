import React from 'react'

function Dropdowns({ labelName, handleChange, value }) {
  return (

    <>
      <label className="dropdown" style={{ "width": "325px", "color": "white", "fontSize": "21px" }}>
        {labelName}
        <select
          className='form-select bg-dark custom-select form-select-lg text-white border-dark shadow'
          value={value}
          onChange={event => handleChange(event)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>PHP</option>
          <option>AUD</option>
          <option>INR</option>
          <option>NZD</option>
          <option>JPY</option>
        </select>
      </label>
    </>
  )
}

export default Dropdowns