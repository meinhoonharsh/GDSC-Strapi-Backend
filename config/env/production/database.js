// postgres://jgtqasxqeocofe:d95ba7cd6e559a9ea04154d8216eca6e1878565a7278293d3b584e6479dc7425@ec2-174-129-225-160.compute-1.amazonaws.com:5432/ddvv1tkga8ih9i
// postgres://{user}:{password}@{hostname}:{port}/{database-name}
const hostname = 
// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

const config = {
  user: 'jgtqasxqeocofe',
  password: 'd95ba7cd6e559a9ea04154d8216eca6e1878565a7278293d3b584e6479dc7425',
  host: 'ec2-174-129-225-160.compute-1.amazonaws.com',
  port: 5432,
  database: 'ddvv1tkga8ih9i'
};
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});