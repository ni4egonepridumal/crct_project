export const Button = ({ children, type, ...props }) => {
  console.log("props", props);
  return (
    <button
      className={props.className}
      type={type}
      onClick={props.onCustomClick}
    >
      {children}
    </button>
  );
};
