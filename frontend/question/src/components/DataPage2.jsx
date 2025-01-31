// frontend/question/src/components/DataPage2.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataPage2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/1')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4">
      {data ? (
        <>
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="mt-2">{data.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataPage2;
