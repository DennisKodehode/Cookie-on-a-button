import { useState, useEffect } from "react";

export const CatFacts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok) {
          throw new Error(
            `HTTP error. Status ${response.status} also this is stupid`
          );
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error} </p>}
      {data && (
        <div>
          <h2>Facts about cats!</h2>
          <ol>
            {data.map((facts, index) => (
              <li key={index}>{facts.fact}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
