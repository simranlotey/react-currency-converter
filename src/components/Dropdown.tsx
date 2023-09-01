import React, { ChangeEvent } from "react";
import { language } from "../config/language";

interface DropdownsProps {
  labelName: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const label: React.CSSProperties = {
  width: "100%",
  color: "white",
  fontSize: "18px",
};

function Dropdowns({ labelName, handleChange, value }: DropdownsProps) {
  return (
    <>
      <label className="dropdown" style={label}>
        {labelName}
        <select
          className="form-select bg-dark custom-select form-control-lg text-white border-dark shadow"
          value={value}
          onChange={(event) => handleChange(event)}
        >
          {language.map((languages) => (
            <option key={languages.code}>{languages.code}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Dropdowns;
