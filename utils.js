exports.CreateObject = (dear_inventory_item, shopify_retail_items, shopify_wholesale_items) => {
  const key = dear_inventory_item.ProductCode;
  const sri = shopify_retail_items;
  const swi = shopify_wholesale_items;
  const category = sri[key] ? sri[key][`Type`] : swi[key] ? swi[key][`Type`] : dear_inventory_item.Category;
  return {
    [`ExternalID`]: dear_inventory_item.ProductCode,
    [`Item Name/Number`]: dear_inventory_item.ProductCode,
    [`Display Name/Code`]: dear_inventory_item.Name,
    [`Vendor SKU`]: dear_inventory_item.SupplierProductCode,
    [`Subsidiary`]: `Suavecito, Inc.`,
    [`Class`]: GenerateClass(key, dear_inventory_item.Name, category),
    [`Track Landed Cost`]: `TRUE`,
    [`Costing Method `]: `FIFO`,
    [`Cost Category`]: `INVENTORY`,
    [`Use Bins`]: `TRUE`,
    [`Default ATP`]: ``,
    [`Replenishment Method`]: `Time Phased`,
    [`Auto-Calculate Lead Time`]: `TRUE`,
    [`Manufacturer`]: dear_inventory_item.LastSuppliedBy,
    [`MPN`]: dear_inventory_item.SupplierProductCode,
    [`Vendor 1 Name`]: dear_inventory_item.LastSuppliedBy,
    [`Cost Estimate Type`]: `Average Cost`,
    [`Item Weight`]: dear_inventory_item.Weight,
    [`Weight Unit`]: dear_inventory_item.WeightUnits,
    [`Tax Schedule`]: `Taxable`,
    [`UPC Code`]: dear_inventory_item.Barcode,
    [`Subitem of`]: dear_inventory_item.ProductFamilySKU,
    [`Matrix Option - Sizes`]: dear_inventory_item.ProductFamilyOption1Value,
    [`Shopify Wholesale Product Handle`]: swi[key] ? swi[key][`Handle`] : ``,
    [`Shopify Wholesale Published Scope`]: swi[key] ? swi[key][`Published`] : ``,
    [`Shopify Wholesale Price`]: swi[key] ? swi[key][`Variant Price`] : ``,
    [`Shopify Wholesale Compare At Price`]: swi[key] ? swi[key][`Variant Compare At Price`] : ``,
    [`Shopify Wholesale Description`]: swi[key] ? swi[key][`Body (HTML)`] : ``,
    [`Shopify Wholesale Tags`]: swi[key] ? swi[key][`Tags`] : ``,
    [`Shopify Retail Product Handle`]: sri[key] ? swi[key][`Handle`] : ``,
    [`Shopify Retail Published Scope`]: sri[key] ? swi[key][`Published`] : ``,
    [`Shopify Retail Price`]: sri[key] ? sri[key][`Variant Price`] : ``,
    [`Shopify Retail Compare At Price`]: sri[key] ? swi[key][`Variant Compare At Price`] : ``,
    [`Shopify Retail Description`]: sri[key] ? swi[key][`Body (HTML)`] : ``,
    [`Shopify Retail Tags`]: sri[key] ? swi[key][`Tags`] : ``,
    [`Shopify Product Type`]: sri[key] ? sri[key][`Type`] : swi[key] ? swi[key][`Type`] : ``,
    [`Shopify Requires Shipping`]: `TRUE`
  }
};


exports.FormatShopifyObject = (file) => {
  const object = {};
  for(let i = 0; i < file.length; i++) {
    object[file[i][`Variant SKU`]] = file[i];
  }
  return object;
};

exports.Headers = [
  { id: `ExternalID`, title: `ExternalID` },
  { id: `Item Name/Number`, title: `Item Name/Number` },
  { id: `Display Name/Code`, title: `Display Name/Code` },
  { id: `Vendor SKU`, title: `Vendor SKU` },
  { id: `Subsidiary`, title: `Subsidiary` },
  { id: `Class`, title: `Class` },
  { id: `Track Landed Cost`, title: `Track Landed Cost` },
  { id: `Costing Method `, title: `Costing Method ` },
  { id: `Cost Category`, title: `Cost Category` },
  { id: `Use Bins`, title: `Use Bins` },
  { id: `Default ATP`, title: `Default ATP` },
  { id: `Replenishment Method`, title: `Replenishment Method` },
  { id: `Auto-Calculate Lead Time`, title: `Auto-Calculate Lead Time` },
  { id: `Manufacturer`, title: `Manufacturer` },
  { id: `MPN`, title: `MPN` },
  { id: `Vendor 1 Name`, title: `Vendor 1 Name` },
  { id: `Cost Estimate Type`, title: `Cost Estimate Type` },
  { id: `Item Weight`, title: `Item Weight` },
  { id: `Weight Unit`, title: `Weight Unit` },
  { id: `Tax Schedule`, title: `Tax Schedule` },
  { id: `UPC Code`, title: `UPC Code` },
  { id: `Subitem of`, title: `Subitem of` },
  { id: `Matrix Option - Sizes`, title: `Matrix Option - Sizes` },
  { id: `Shopify Wholesale Product Handle`, title: `Shopify Wholesale Product Handle` },
  { id: `Shopify Wholesale Published Scope`, title: `Shopify Wholesale Published Scope` },
  { id: `Shopify Wholesale Price`, title: `Shopify Wholesale Price` },
  { id: `Shopify Wholesale Compare At Price`, title: `Shopify Wholesale Compare At Price` },
  { id: `Shopify Wholesale Description`, title: `Shopify Wholesale Description` },
  { id: `Shopify Wholesale Tags`, title: `Shopify Wholesale Tags` },
  { id: `Shopify Retail Product Handle`, title: `Shopify Retail Product Handle` },
  { id: `Shopify Retail Published Scope`, title: `Shopify Retail Published Scope` },
  { id: `Shopify Retail Price`, title: `Shopify Retail Price` },
  { id: `Shopify Retail Compare At Price`, title: `Shopify Retail Compare At Price` },
  { id: `Shopify Retail Description`, title: `Shopify Retail Description` },
  { id: `Shopify Retail Tags`, title: `Shopify Retail Tags` },
  { id: `Shopify Product Type`, title: `Shopify Product Type` },
  { id: `Shopify Requires Shipping`, title: `Shopify Requires Shipping` },
  { id: `Component 1 - Item`, title: `Component 1 - Item` },
  { id: `Component 1 - Quantity`, title: `Component 1 - Quantity` },
  { id: `Component 2 - Item`, title: `Component 2 - Item` },
  { id: `Component 2 - Quantity`, title: `Component 2 - Quantity` },
  { id: `Component 3 - Item`, title: `Component 3 - Item` },
  { id: `Component 3 - Quantity`, title: `Component 3 - Quantity` },
  { id: `Component 4 - Item`, title: `Component 4 - Item` },
  { id: `Component 4 - Quantity`, title: `Component 4 - Quantity` },
  { id: `Component 5 - Item`, title: `Component 5 - Item` },
  { id: `Component 5 - Quantity`, title: `Component 5 - Quantity` },
  { id: `Component 6 - Item`, title: `Component 6 - Item` },
  { id: `Component 6 - Quantity`, title: `Component 6 - Quantity` },
  { id: `Component 7 - Item`, title: `Component 7 - Item` },
  { id: `Component 7 - Quantity`, title: `Component 7 - Quantity` },
  { id: `Component 8 - Item`, title: `Component 8 - Item` },
  { id: `Component 8 - Quantity`, title: `Component 8 - Quantity` },
  { id: `Component 9 - Item`, title: `Component 9 - Item` },
  { id: `Component 9 - Quantity`, title: `Component 9 - Quantity` },
  { id: `Component 10 - Item`, title: `Component 10 - Item` },
  { id: `Component 10 - Quantity`, title: `Component 10 - Quantity` },
  { id: `Component 11 - Item`, title: `Component 11 - Item` },
  { id: `Component 11 - Quantity`, title: `Component 11 - Quantity` },
  { id: `Component 12 - Item`, title: `Component 12 - Item` },
  { id: `Component 12 - Quantity`, title: `Component 12 - Quantity` },
  { id: `Component 13 - Item`, title: `Component 13 - Item` },
  { id: `Component 13 - Quantity`, title: `Component 13 - Quantity` },
  { id: `Component 14 - Item`, title: `Component 14 - Item` },
  { id: `Component 14 - Quantity`, title: `Component 14 - Quantity` },
  { id: `Component 15 - Item`, title: `Component 15 - Item` },
  { id: `Component 15 - Quantity`, title: `Component 15 - Quantity` },
  { id: `Component 16 - Item`, title: `Component 16 - Item` },
  { id: `Component 16 - Quantity`, title: `Component 16 - Quantity` },
  { id: `Component 17 - Item`, title: `Component 17 - Item` },
  { id: `Component 17 - Quantity`, title: `Component 17 - Quantity` },
  { id: `Component 18 - Item`, title: `Component 18 - Item` },
  { id: `Component 18 - Quantity`, title: `Component 18 - Quantity` },
  { id: `Component 19 - Item`, title: `Component 19 - Item` },
  { id: `Component 19 - Quantity`, title: `Component 19 - Quantity` },
  { id: `Component 20 - Item`, title: `Component 20 - Item` },
  { id: `Component 20 - Quantity`, title: `Component 20 - Quantity` },
  { id: `Component 21 - Item`, title: `Component 21 - Item` },
  { id: `Component 21 - Quantity`, title: `Component 21 - Quantity` },
  { id: `Component 22 - Item`, title: `Component 22 - Item` },
  { id: `Component 22 - Quantity`, title: `Component 22 - Quantity` },
  { id: `Component 23 - Item`, title: `Component 23 - Item` },
  { id: `Component 23 - Quantity`, title: `Component 23 - Quantity` },
  { id: `Component 24 - Item`, title: `Component 24 - Item` },
  { id: `Component 24 - Quantity`, title: `Component 24 - Quantity` },
  { id: `Component 25 - Item`, title: `Component 25 - Item` },
  { id: `Component 25 - Quantity`, title: `Component 25 - Quantity` },
  { id: `Component 26 - Item`, title: `Component 26 - Item` },
  { id: `Component 26 - Quantity`, title: `Component 26 - Quantity` },
  { id: `Component 27 - Item`, title: `Component 27 - Item` },
  { id: `Component 27 - Quantity`, title: `Component 27 - Quantity` },
  { id: `Component 28 - Item`, title: `Component 28 - Item` },
  { id: `Component 28 - Quantity`, title: `Component 28 - Quantity` },
  { id: `Component 29 - Item`, title: `Component 29 - Item` },
  { id: `Component 29 - Quantity`, title: `Component 29 - Quantity` },
  { id: `Component 30 - Item`, title: `Component 30 - Item` },
  { id: `Component 30 - Quantity`, title: `Component 30 - Quantity` }
];

GenerateClass = (sku, name, category) => {
  //Components
  if(sku.charAt(0) === 'J' || sku.charAt(0) === 'F' || sku.charAt(0) === 'L') {
    const classes = [
      {string: 'Label', subClass: 'Label'},
      {string: 'Jar', subClass: 'Jar'},
      {string: 'Lid', subClass: 'Lid'},
      {string: 'Bottle', subClass: 'Bottle'},
      {string: 'Cap', subClass: 'Cap'},
      {string: 'Box', subClass: 'Box'},
      {string: 'Unboxed', subClass: 'Unboxed'},
      {string: 'Unlabeled', subClass: 'Unlabeled'},
      {string: 'Dropper', subClass: 'Dropper'},
      {string: 'Sprayer', subClass: 'Sprayer'},
      {string: 'Pump', subClass: 'Pump'},
      {string: 'Orifice', subClass: 'Orifice'},
      {string: 'Tube', subClass: 'Tube'},
      {string: 'Liner', subClass: 'Liner'},
      {string: 'Blister', subClass: 'Blister'},
      {string: 'Bag', subClass: 'Bag'},
      {string: 'Reducer', subClass: 'Reducer'},
      {string: 'Comb', subClass: 'Comb'},
      {string: 'Flask', subClass: 'Flask'},
      {string: 'Fill', subClass: 'Fill'}
    ];
    for(let i = 0; i < classes.length; i++) {
      const object = classes[i];
      if(name.includes(object.string)) {
        return 'Components : ' + object.subClass;
      }else if(i === classes.length - 1) {
        return 'Components : Other'
      }
    }
  }
  //Merchandise
  else if(sku.charAt(0) === 'M' || sku.charAt(0) === 'C') {
    const classes = [
      {string: 'Mug', subClass: 'Cups & Mugs'},
      {string: 'Pint Glass', subClass: 'Cups & Mugs'},
      {string: 'Sticker', subClass: 'Stickers'},
      {string: 'Key Chain', subClass: 'Accessories'},
      {string: 'Pin', subClass: 'Pins & Patches'},
      {string: 'Patch', subClass: 'Pins & Patches'},
      {string: 'Switchblade', subClass: 'Novelty & Toys'},
      {string: 'Doll', subClass: 'Novelty & Toys'},
      {string: 'Bobble', subClass: 'Novelty & Toys'},
      {string: 'Pillow', subClass: 'Novelty & Toys'},
      {string: 'Lanyard', subClass: 'Accessories'},
      {string: 'Sunglasses', subClass: 'Accessories'},
      {string: 'Wallet', subClass: 'Accessories'},
      {string: 'Brush', subClass: 'Combs & Brushes'},
      {string: 'Comb', subClass: 'Combs & Brushes'},
      {string: 'Cape', subClass: 'Capes'},
      {string: 'Apron', subClass: 'Accessories', class: 'Apparel'},
      {string: 'License Plate', subClass: 'Novelty & Toys'},
      {string: 'Belt', subClass: 'Accessories', class: 'Apparel'}
    ];
    for(let i = 0; i < classes.length; i++) {
      const object = classes[i];
      if(name.includes(object.string)) {
        const obj_class = object.class ? object.class : 'Merchandise'
        return `${obj_class} : ${object.subClass}`;
      }else if(i === classes.length - 1) {
        return 'Merchandise : Other'
      }
    }
  }
  //Apparel
  else if(sku.charAt(0) === 'S' || sku.charAt(0) === 'H') {
    const classes = [
      {string: 'Tee', subClass: 'Shirts'},
      {string: 'Shirt', subClass: 'Shirts'},
      {string: 'Tank', subClass: 'Shirts'},
      {string: 'Tank', subClass: 'Jersey'},
      {string: 'Hat', subClass: 'Hats & Beanies'},
      {string: 'Beanie', subClass: 'Hats & Beanies'},
      {string: 'Jacket', subClass: 'Jackets & Sweaters'},
      {string: 'Sweater', subClass: 'Jackets & Sweaters'},
      {string: 'Hoodie', subClass: 'Jackets & Sweaters'},
      {string: 'Hooded', subClass: 'Jackets & Sweaters'},
      {string: 'Crewneck', subClass: 'Jackets & Sweaters'},
      {string: 'Windbreaker', subClass: 'Jackets & Sweaters'},
      {string: 'Polo', subClass: 'Shirts'},
      {string: 'Cap', subClass: 'Hats & Beanies'}
    ]
    for(let i = 0; i < classes.length; i++) {
      const object = classes[i];
      if(name.includes(object.string)) {
        return 'Apparel : ' + object.subClass;
      }else if(i === classes.length - 1) {
        return 'Apparel : Other'
      }
    }
  }
  //Beauty
  else if(sku.charAt(0) === 'P' || sku.charAt(0) === 'K') {
    const classes = [
      {string: 'Brow Pomade', subClass: 'Cosmetics'},
      {string: 'Pomade Pencil', subClass: 'Hair'},
      {string: 'Pomade', subClass: 'Hair'},
      {string: 'Hair', subClass: 'Hair'},
      {string: 'Silkening Serum', subClass: 'Hair'},
      {string: 'Spray', subClass: 'Hair'},
      {string: 'spray', subClass: 'Hair'},
      {string: 'Shampoo', subClass: 'Hair'},
      {string: 'Conditioner', subClass: 'Hair'},
      {string: 'Blowout', subClass: 'Hair'},
      {string: 'Wet Set', subClass: 'Hair'},
      {string: 'Lip', subClass: 'Cosmetics'},
      {string: 'Brow Gel', subClass: 'Cosmetics'},
      {string: 'Eyeliner', subClass: 'Cosmetics'},
      {string: 'Beard', subClass: 'Beard'},
      {string: 'Shave', subClass: 'Shave'},
      {string: 'Shaving', subClass: 'Shaving'},
      {string: 'Mustache', subClass: 'Beard'}
    ]
    const parent_class = category === 'Beauty' ? 'Beauty' : `Men's Grooming`;
    for(let i = 0; i < classes.length; i++) {
      const object = classes[i];
      if(name.includes(object.string)) {
        return `${parent_class} : ${object.subClass}`;
      }else if(i === classes.length - 1) {
        return `${parent_class} : Other`;
      }
    }
  }
  //Gunthers Items
  else if(sku.charAt(0).toLowerCase() === 'g' && sku.charAt(1).toLowerCase() === 'u') {
    return 'Other Brands : Gunthers';
  }
  //Tres Noir Items
  else if(sku.charAt(0).toLowerCase() == 't' && sku.charAt(1).toLowerCase() == 'n') {
    return 'Other Brands : Tres Noir';
  }
}
