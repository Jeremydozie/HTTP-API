var sql = require("mssql"); var connect = function() { var conn = new sql.ConnectionPool({ user: 'sa', password: 'Pass@123', server: 'SAI-PC', database: 'TESTDB' }); return conn; }; module.exports = connect;
var sql = require("mssql");
var connect = function()
{
   var conn = new sql.ConnectionPool({
       user: 'sa',
       password: 'Pass@123',
       server: 'SAI-PC',
       database: 'TESTDB'
   });

   return conn;
};

module.exports = connect;
