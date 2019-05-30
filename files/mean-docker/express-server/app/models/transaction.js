var mongoose = require('mongoose');

// Define the schema
var transactioin = new Schema ({
        recordId: mongoose.Schema.Types.ObjectId,//记录id
        mainAccountName: String,//用户id
        type: Number,//操作类型，只有定期存款，活期存款，取出，转账四种
        secondAccountName: String,//如果是转账则记录目标账户的id
        money: { type: Number, min: 0, default: 0 },//金额
        time: Date//日期
})

module.exports = mongoose.model('Transaction', transactioin );
