import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const fetchedData = await response.json();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
