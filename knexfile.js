// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection:  'postgre://localhost/grecipeAPI'
  },
  test: {
    client: 'pg',
    connection:  'postgre://localhost/test-grecipeAPI'
  },
};
