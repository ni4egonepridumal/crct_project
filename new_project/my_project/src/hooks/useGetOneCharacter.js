import { useState, useEffect } from "react";
import { instance } from "../api";

export const useGetCharacter = (id) => {
  const [character, setCharacter] = useState();
  const [loadingCharacter, setLoadingCharacter] = useState(false);
  const [errorGetCharacter, setErrorGetCharacter] = useState(null);
  const getFetchCharacters = async () => {
    try {
      setLoadingCharacter(true);
      const response = await instance.get(`characters/${id}`);
      setCharacter(response.data);
    } catch (error) {
      setErrorGetCharacter(error);
    } finally {
      setLoadingCharacter(false);
    }
  };

  useEffect(() => {
    getFetchCharacters();
  }, []);

  return { character, errorGetCharacter, loadingCharacter };
};
