const products_file = process.argv[2];
const bom_file = process.argv[3];
const csv = require('csvtojson');
const utils = require('./utils');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './files/output.csv',
  header: utils.ObjectHeader
});
const records = {};

(async () => {
  const products = await csv().fromFile(`./files/${products_file}`);
  const bom = await csv().fromFile(`./files/${bom_file}`);
  //loop over products file
  for(let i = 0; i < products.length; i++) {
    const product = products[i];
    //loop over bill of materials file
    BOMitemSearch:
    for(let x = 0; x < bom.length; x++) {
      const bom_item = bom[x];
      if(product.ProductCode === bom_item.ProductSKU) {
        //record already exists
        if(records[product.ProductCode]) {
          //find and fill first blank component item & qty column
          ComponentColumnSearch:
          for(let y = 1; y <= 30; y++) {
            if(!records[product.ProductCode][`Component ${y} - Item`]) {
              records[product.ProductCode][`Component ${y} - Item`] = bom_item.ComponentSKU;
              records[product.ProductCode][`Component ${y} - Quantity`] = bom_item.Quantity;
              break ComponentColumnSearch;
            }
          }
        //record doesn't exist yet
        }else{
          records[product.ProductCode] = utils.CreateObject(product, bom_item);
        }
      }
    }
  }
  //convert records object to array
  const records_array = Object.values(records);
  csvWriter.writeRecords(records_array);
})();