import React, { useEffect, useState } from "react";

const Card = ({ name }) => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({});

  const increment = () => setCounter((counter) => (counter += 1));

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch("http://127.0.0.1:5000/"); // fetch

      if (!response.ok) throw new Error("Something went wrong"); // error handling : catch
      const data = await response.json(); // jsonify the data : then
      setData(data); // update state with new data
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.message && <h1>{`${name}! ${data.message}`}</h1>}
      <button onClick={increment}>{counter}</button>
    </div>
  );
};

export default Card;
