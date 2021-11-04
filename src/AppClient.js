import { useState, useEffect } from 'react';
import client from './contentful/client';

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await client.getEntries();
      setEntries(data);
    };

    getPosts();
  }, []);

  return <div>{entries.total}</div>;
};

export default App;
