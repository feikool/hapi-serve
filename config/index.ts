// if (process.env.NODE_ENV === 'production') {
//   require('env2')('./.env.prod');
// } else {
//   require('env2')('./.env');
// }
// namespace config{
//   const { env } = process;
//   module.exports = {
//     "username": env.MYSQL_USERNAME,
//     "password": env.MYSQL_PASSWORD,
//     "database": env.MYSQL_DB_NAME,
//     "host": env.MYSQL_HOST,
//     "port": env.MYSQL_PORT,
//     "dialect": "mysql",
//     "operatorsAliases": false,  // 此参数为自行追加，解决高版本 sequelize 连接警告
//   }
// }

module.exports = {
  host:'127.0.0.1',
  port:3000
}