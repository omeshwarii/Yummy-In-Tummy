const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{type:String, required:true},
    image:{type:String,required:true},
    items: {
        type: [{ type: String }],
        required: true,
        default: []
      },
    calories:{
      type: [{ type: String }],
      required: true,
      default: []
    },
    mealtype: { type: String}
    
});


module.exports = mongoose.model('Menu', menuSchema);