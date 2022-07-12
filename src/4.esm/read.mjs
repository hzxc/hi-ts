import { readFile } from 'fs';

readFile('esm/a.txt', 'utf8', function (err, data) {
  console.log(err);
  console.log(data);
});
