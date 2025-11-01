import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(token);

    if (!token) {
      navigate("/auth");
    }
  }, [navigate]);
  return { isAuth };
};
