const fs = require('fs');
const csvWriter = require('csv-write-stream');

var writer = csvWriter();
var faker = require('faker');

const dataGen = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (var i = 0; i < 10000000; i++) {
    var name = faker.name.firstName() + ' ' + faker.name.firstName() + ' ' + faker.name.lastName();
    writer.write({
      catName: name,
      category_id: Math.floor(Math.random() * 4) + 1
    });
  }
  writer.end();
  console.log('done');
};

dataGen();