const mongoose = require('mongoose')

const salesSchema = mongoose.Schema({
    orderNumber: {
      type: Number
    },
    orderDate: {
      type: Number
    },
    requiredDate: {
      type: Number
    },
    shippedDate: {
      type: Number
    },
    status: {
      type: String
    },
    comments: {
      type: String
    },
    customerNumber: {
      type: Number
    },
    productCode: {
      type: String
    },
    quantityOrdered: {
      type: Number
    },
    priceEach: {
      type: Number
    },
    orderLineNumber: {
      type: Number
    },
    productName: {
      type: String
    },
    productLine: {
      type: String
    },
    productScale: {
      type: String
    },
    productVendor: {
      type: String
    },
    productDescription: {
      type: String
    },
    quantityInStock: {
      type: Number
    },
    buyPrice: {
      type: Number
    },
    MSRP: {
      type: Number
    },
    textDescription: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const Sales = mongoose.model('Sales', salesSchema)


module.exports = Sales;