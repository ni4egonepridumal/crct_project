import { useState, useEffect } from "react";
import axios from "axios";

export const useGetCharacter = (id) => {
  const [character, setCharacter] = useState();
  const [loadingCharacter, setLoadingCharacter] = useState(false);
  const [errorGetCharacter, setErrorGetCharacter] = useState(null);
  const getFetchCharacters = async () => {
    try {
      setLoadingCharacter(true);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
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
