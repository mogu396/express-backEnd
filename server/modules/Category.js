const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    parent: { // 不能是string，标识它是数据库里的id
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
})

module.exports = mongoose.model('Category', schema)