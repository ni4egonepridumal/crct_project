export const Button = ({ children, type, ...props }) => {
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
