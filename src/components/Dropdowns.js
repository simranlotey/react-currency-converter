import React from 'react'
import { language } from '../config/language'


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
          {language.map(languages =>
            <option>{languages}</option>
          )}
        </select>
      </label>
    </>
  )
}


export default Dropdowns