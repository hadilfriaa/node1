const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  
    total: { type: Number, 
        required: true 
    },

    user: { type: Schema.Types.ObjectId, ref: 'user',
       required: true 
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
})

module.exports = mongoose.model('Order', OrderSchema);