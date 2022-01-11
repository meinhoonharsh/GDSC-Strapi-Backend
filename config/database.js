// postgres://dugzqbfosyrpxb:83b8e1eff8c6716ed1bf5f5cdd6c6859e664a94cf676a7693b29fc0f3c836d28@ec2-3-225-41-234.compute-1.amazonaws.com:5432/de8uet3q2prros
// postgres://{user}:{password}@{hostname}:{port}/{database-name}

const config = {
    user: 'dugzqbfosyrpxb',
    database: 'de8uet3q2prros',
    password: '83b8e1eff8c6716ed1bf5f5cdd6c6859e664a94cf676a7693b29fc0f3c836d28',
    port: 5432,
    host: 'ec2-3-225-41-234.compute-1.amazonaws.com',
}   
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
