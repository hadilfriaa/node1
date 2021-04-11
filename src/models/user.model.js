const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    telephone:{
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    IsAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    },
    
    address: {
        
        rue: { 
            type: String ,
            required: true
        } ,
        ville: {
            type: String,
            required: true
        },
        cp: {
            type: Number,
            required: true
        },
        pays: {
          type: String,
          required: true
          
        }
       
    },
    orders: [ { type: Schema.Types.ObjectId, ref: 'Order'}]
});

module.exports = mongoose.model('User', userSchema);