let http = require('http');
let fs = require('fs');
let path = require('path');

const fetch = url => {
  return new Promise((resolve, reject) => {
    let options = {
      hostname: 'localhost',
      port: 4000,
      path: url,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    let req = http.request(options, function(res) {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', function(data) {
        body += data;
      });
      res.on('end', function() {
        resolve(JSON.parse(body));
      });
    });
    req.on('error', function(e) {
      reject(e.message);
    });
    req.end();
  });
};

const gamesDir = path.resolve(__dirname, '..', 'public', 'games');

const saveJSONToFile = (filename, data) => {
  let dest = path.join(gamesDir, filename);
  fs.writeFile(dest, JSON.stringify(data), 'utf8', err => {
    if (err) {
      console.error('Error writing', dest);
    }
  });
};

fetch('/games').then(games => {
  games.forEach(g => {
    fetch(`/games/${g.id}`).then(r => {
      saveJSONToFile(r.metadata.filename, r);
    });
  });

  saveJSONToFile('games.json', games);
});
