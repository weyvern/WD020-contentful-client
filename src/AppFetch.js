import { useState, useEffect } from 'react';

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const {
      REACT_APP_SPACE_ID: space_id,
      REACT_APP_ENVIRONMENT_ID: environment_id,
      REACT_APP_ACCESS_TOKEN: access_token
    } = process.env;

    const getPosts = async () => {
      const res = await fetch(
        `https://cdn.contentful.com/spaces/${space_id}/environments/${environment_id}/entries?access_token=${access_token}`
      );
      const data = await res.json();
      setEntries(data);
    };

    getPosts();
  }, []);

  return <div>{entries.total}</div>;
};

export default App;
