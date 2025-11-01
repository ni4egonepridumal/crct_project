import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/header/Header";
import { useNavigate } from "react-router";
import { useAuth } from "./hooks/useAuth";
function App() {

  const { isAuth } = useAuth();
  console.log("isAuth", isAuth);
  if (isAuth === null) {
    return <p>Загрузка</p>;
  }
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
