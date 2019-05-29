var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema
var product = new Schema({
    productId: String,//产品id
    name: String,//产品名称
    time: Number,//持续天数
    profit: Number,//利率
    buyers:[{type:Schema.Types.ObjectId,ref:'account'}]
});


module.exports = mongoose.model('Product',product);
