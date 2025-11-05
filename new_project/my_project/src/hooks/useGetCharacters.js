import { useState, useEffect } from "react";
import { instance } from "../api";

export const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(false);
  const [errorGetCharacters, setErrorGetCharacters] = useState(null);
  const getFetchCharacters = async () => {
    try {
      setLoadingCharacters(true);
      const response = await instance.get("characters");
      setCharacters(response.data);
    } catch (error) {
      setErrorGetCharacters(error);
    } finally {
      setLoadingCharacters(false);
    }
  };

  useEffect(() => {
    getFetchCharacters();
  }, []);

  return { characters, errorGetCharacters, loadingCharacters };
};
