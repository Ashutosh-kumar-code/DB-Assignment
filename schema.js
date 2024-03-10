const mongoose = require('mongoose');


//  Product_Category Schema
const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: { type: Date },
});

  // Product_Inventory Schema
const productInventorySchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null },

});


// Discount Schema
const discountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String },
    discount_percent: { type: Number, required: true },
    active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
});

// Product Schema
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


// Discount model
const Discount = mongoose.model('Discount', discountSchema);

// Product Category model
const Product_Category = mongoose.model('Product_Category', productCategorySchema);

//  Product Inventory model
const Product_Inventory = mongoose.model('Product_Inventory', productInventorySchema);

//  Product model
const Product = mongoose.model('Product', productSchema);

// Export models
module.exports = { Product,  Product_Inventory, Product_Category, Discount };
