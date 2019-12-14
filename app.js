const csv = require('csvtojson');
const utils = require('./utils');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './files/output.csv',
  header: utils.Headers
});

const records = {};

(async () => {
  const products = await csv().fromFile(`./files/${process.argv[2]}`);
  const bom = await csv().fromFile(`./files/${process.argv[3]}`);
  const shopify_wholesale_file = await csv().fromFile(`./files/${process.argv[4]}`);
  const shopify_retail_file = await csv().fromFile(`./files/${process.argv[5]}`);
  const shopify_retail_items = utils.FormatShopifyObject(shopify_retail_file);
  const shopify_wholesale_items = utils.FormatShopifyObject(shopify_wholesale_file);

  for(let i = 0; i < products.length; i++) {
    const product = products[i];
    if(product[`BillOfMaterial`] === 'Yes') {
      for(let x = 0; x < bom.length; x++) {
        const bom_item = bom[x];
        if(product[`ProductCode`] === bom_item[`ProductSKU`]) {
          if(records[product[`ProductCode`]]) {
            for(let y = 1; y <= 30; y++) {
              if(!records[product[`ProductCode`]][`Component ${y} - Item`]) {
                records[product[`ProductCode`]][`Component ${y} - Item`] = bom_item.ComponentSKU;
                records[product[`ProductCode`]][`Component ${y} - Quantity`] = bom_item.Quantity;
                break;
              }
            }
          }else{
            records[product.ProductCode] = utils.CreateObject(product, shopify_retail_items, shopify_wholesale_items);
            records[product.ProductCode][`Component 1 - Item`] = bom_item.ComponentSKU;
            records[product.ProductCode][`Component 1 - Quantity`] = bom_item.Quantity;
          }
        }
      }
    }else{
      records[product.ProductCode] = utils.CreateObject(product, shopify_retail_items, shopify_wholesale_items);
    }
  }
  //convert records object to array
  const records_array = Object.values(records);
  csvWriter.writeRecords(records_array);
})();