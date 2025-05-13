import { useState, useEffect } from 'react';

function useFetchCode(url) {
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        // setLoading(false);
        console.log("result is ", result)
        setCode(result.code);
      } catch (err) {
        setError(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { code, loading, error, setCode };
}

export default useFetchCode;