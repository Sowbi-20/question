// frontend/question/src/components/DataPage1.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataPage1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data/0')
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
        <p>hello sow...</p>
      )}
    </div>
  );
};

export default DataPage1;
