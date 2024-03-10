const mongoose = require('mongoose');


// Define Product_Category Schema
const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
});

  // Create Mongoose schema for Product_Inventory
const productInventorySchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null },

});


// Create Mongoose schema for Discount
const discountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String },
    discount_percent: { type: Number, required: true },
    active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
});

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  sku: { type: String },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_Category', required: true },
  inventory_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product_Inventory', required: true },
  price: { type: Number },
  discount_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount', required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
});


// Create Mongoose models based on the schemas
// const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

// Create Product_Category model
const Product_Category = mongoose.model('Product_Category', productCategorySchema);

// Create Product_Category model
const Product_Inventory = mongoose.model('Product_Inventory', productInventorySchema);

// Create Product model
const Product = mongoose.model('Product', productSchema);

// Export the models for use in your application
module.exports = { Product,  Product_Inventory, Product_Category, Discount };
