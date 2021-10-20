// 小技巧，拿到app
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../modules/Category')
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)
        // 发回给客户端，让它知道创建完成了
        res.send(model)
    })
    app.use('/admin/api', router)
}