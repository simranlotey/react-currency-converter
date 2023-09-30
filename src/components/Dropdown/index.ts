export const customStyles = {
  menuList: (provided: any) => ({
    ...provided,
    maxHeight: "226px",
    backgroundColor: "rgb(33, 37, 41)",
    color: "#fff",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#2d3338" : "",
    cursor: "pointer",
    alignItems: "center",
    padding: "4px 0px 4px 10px",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "rgb(33, 37, 41)",
    padding: "4.8px",
    borderRadius: "7px",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "white",
    "&:hover": {
      color: "white",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
  }),
};
