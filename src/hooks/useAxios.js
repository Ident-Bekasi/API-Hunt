import { useState } from "react";
import axios from "axios";

const useAxios = (query) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.publicapis.org${query}`, params);
      setResponse(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    fetchData: (params) => fetchData(params),
    response,
    loading,
    error,
  };
};

export default useAxios;
