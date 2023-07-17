import React from "react";
import spinner from "./Images/spinner.gif";

const image = {
  paddingTop: "20px",
  width: "60px",
};
function Spinner() {
  return (
    <div className="text-center">
      <img src={spinner} alt="" style={image} />
    </div>
  );
}

export default Spinner;
