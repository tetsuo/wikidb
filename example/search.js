var wikidb = require('../');
var db = require('level')('/tmp/wiki.db');

var wdb = wikidb(db, { dir: '/tmp/wiki.blob' });
var s = wdb.search(process.argv.slice(2));
s.on('data', console.log);
