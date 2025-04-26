import { useState, useEffect } from 'react';

function useFetchCode(url) {
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("result is ", result)
        setCode(result.code);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { code, loading, error, setCode };
}

export default useFetchCode;