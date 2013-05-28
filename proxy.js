var mysql = require('mysql2');
var postgres = require('pg');

var connString = process.argv[3];
function  columnsFor(row) {
  res = [];
  for (var fieldName in row) {
    res.push({
        catalog: 'def',
        schema: '',
        table: '',
        orgTable: '',
        name: fieldName,
        orgName: '',
        characterSet: 63,
        columnType: 253,
        columnLength: 100,
        flags: 1,
        decimals: 31
    });
  }
  return res;
}

var id = 0;
var server = mysql.createServer();
server.on('connection', function(conn) {
  conn.serverHandshake({
    protocolVersion: 10,
    serverVersion: 'node.js rocks',
    connectionId: id++,
    statusFlags: 2,
    characterSet: 8,
    capabilityFlags: 0xffffff
  });
  var client = new postgres.Client(connString);
  client.connect();
  conn.on('query', function(sql) {
    var headerSent = false;
    var query = client.query(sql);
    query.on('row', function(row) {
      if (!headerSent) {
        headerSent = true;
        conn.writeColumns(columnsFor(row));
      }
      var arrayRow = [];
      for(var name in row) {
        arrayRow.push(row[name]);
      }
      conn.writeTextRow(arrayRow);
    });
    query.on('end', function() {
      conn.writeEof();
    });
    query.on('error', function(err) {
      conn.writeError({ code: 1064, message: err.message});
    });
    //conn.on('end', cliendt.end.bind(client));
  });
});
server.listen(process.argv[2]);
