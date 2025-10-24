import React from "react";

export const CustomInput = () => {
  const [value, setValue] = React.useState("text");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return <input value={value} onChange={handleChange} />;
};
