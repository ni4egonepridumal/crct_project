// todo - потренироваться и сделать компонент инпута с пропсами, по аналогии с button
import React from "react";

export const CustomInput = () => {
  //   const ref = React.useRef("");
  const [value, setValue] = React.useState("text");
  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log("refValue", ref.current.value);
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      {/* <button onClick={handleChange}>Вывести значение Ref</button> */}
    </>
  );
};
