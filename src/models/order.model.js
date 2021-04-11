const { date, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  
    total: { type: Number, 
        required: true 
    },

    user: { type: Schema.Types.ObjectId, ref: 'user',
       required: true 
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    status: {
        type: String,
        required: true 
    },
    date:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Order', OrderSchema);