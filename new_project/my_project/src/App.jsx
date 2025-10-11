import { Outlet } from "react-router";
import { Header } from "./components/header/Header";
function App() {
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
