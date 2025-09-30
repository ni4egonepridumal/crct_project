const after_footer = document.getElementsByClassName("after_footer")[0];

const p_element = after_footer.appendChild(document.createElement("p"));

p_element.innerHTML = "Текст после футера";

// const element_1 = React.createElement(
//   "h1",
//   { title: "hello", style: {} },
//   "Hello from MyReact!"
// );

function jsx(type, props, key) {
  return {
    $$typeof: Symbol.for("react.element"),
    type,
    props,
    key,
  };
}

console.log(
  "jsx",
  jsx("div", { title: "Просто текст", children: "Просто текст" })
);
