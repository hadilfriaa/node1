const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: Schema.Types.ObjectId, ref: 'category',
        required: true 
    },
    favoris:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Product', ProductSchema);