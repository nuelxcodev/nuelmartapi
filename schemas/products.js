const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const itemSchema = new Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    slug: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    category: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    brand: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    countInStock: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    image: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    keyFeatures: {
        type: [mongoose.SchemaTypes.String],
        required: true
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    color: {
        type: mongoose.SchemaTypes.String
    },
    material: {
        type: mongoose.SchemaTypes.String
    },
    capacity: {
        type: mongoose.SchemaTypes.String
    },
    screenSize: {
        type: mongoose.SchemaTypes.String
    },
    storage: {
        type: mongoose.SchemaTypes.Mixed
    },
    processor: {
        type: mongoose.SchemaTypes.String
    },
    RAM: {
        type: mongoose.SchemaTypes.String
    },
    batteryLife: {
        type: mongoose.SchemaTypes.String
    },
    waterResistance: {
        type: mongoose.SchemaTypes.String
    },
    rating: {
        type: mongoose.SchemaTypes.Number
    },
    numReview: {
        type: mongoose.SchemaTypes.Number
    }
})

const Item = mongoose.model('Items', itemSchema)
module.exports = Item;