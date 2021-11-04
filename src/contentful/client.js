const contentful = require('contentful');

const { REACT_APP_SPACE_ID: space, REACT_APP_ACCESS_TOKEN: accessToken } =
  process.env;

const client = contentful.createClient({
  accessToken,
  space
});

export default client;
