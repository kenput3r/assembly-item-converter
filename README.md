# assembly-item-converter
Converts inventory.dearsystems.com BOM exports to NetSuite AssemblyItem imports

## Pseudocode

For each item in Inventory Item export from inventory.dearsystems.com

  If the item has a Bill Of Materials
  
    For each item in Bill Of Materials export from inventory.dearsystems.com
    
      If the item already exists in the Output Object
      
        For each Bill Of Materials item SKU property (1 - 30)
        
          If item property doesn't exist
          
            Set Prop: Component ${i} - Item
            
            Set Prop: Component ${i} - Quantity
            
            Break out of loop
            
      If the item does not exist in the Output Object
      
        Add item to Output Object
        
        Set item equal to () => ReturnObject
        
        Set Prop: Component 1 - Item
        
        Set Prop: Component 1 - Quantity
        
  If the item does not have a Bill Of Materials
  
    Add item to Output Object
    
    Set item equal to () => Return Object
    


### Function ReturnObject

  Create Object
  
  Set Prop: External ID
  
  Set Prop: Item Name/Number
  
  Set Prop: Display Name/Code
  
  set Prop: Vendor SKU
  
  Set Prop: Subsidiary
  
  Set Prop: () => Class
  
  Set Prop: Track Landed Cost
  
  Set Prop: Costing Method
  
  Set Prop: Cost Category
  
  Set Prop: Use Bins
  
  Set Prop: Replenishment Method
  
  Set Prop: Auto-Calculate Lead Time
  
  Set Prop: Manufacturer
  
  Set Prop: MPN
  
  Set Prop: Vendor 1 Name
  
  Set Prop: Cost Estimate Type
  
  Set Prop: () => Item Weight
  
  Set Prop: Weight Unit
  
  Set Prop: Tax Schedule
  
  Set Prop: UPC Code
  
  Set Prop: () => Shopify Wholesale Product Handle
  
  Set Prop: () => Shopify Wholesale Published Scope
  
  Set Prop: () => Shopify Wholesale Price
  
  Set Prop: () => Shopify Wholesale Compare At Price
  
  Set Prop: () => Shopify Wholesale Description
  
  Set Prop: () => Shopify Wholesale Tags
  
  Set Prop: () => Shopify Retail Product Handle
  
  Set Prop: () => Shopify Retail Published Scope
  
  Set Prop: () => Shopify Retail Price
  
  Set Prop: () => Shopify Retail Compare At Price
  
  Set Prop: () => Shopify Retail Description
  
  Set Prop: () => Shopify Retail Tags
  
  Set Prop: () => Shopify Product Type
  
  Set Prop: () => Shopify Requires Shipping
  
  Return Object
  


### Function ReturnClass

  For each object in the types array
  
   If the item type is equal to the object type prop
   
     Return the object class prop
     