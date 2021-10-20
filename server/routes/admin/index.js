// 小技巧，拿到app
module.exports = app => {
    const express = require('express')
    const router = express.Router()

    // 创建分类
    const Category = require('../../modules/Category')
    router.post('/categories', async (req, res) => {
        const model = await Category.create(req.body)
        // 发回给客户端，让它知道创建完成了
        res.send(model)
    })

    // 修改分类
    router.put('/categories/:id', async (req, res) => {
        const model = await Category.findOneAndUpdate(req.params.id,req.body)
        // 发回给客户端，让它知道创建完成了
        res.send(model)
    })

    // 获取分类
    router.get('/categories', async (req, res) => {
        const items = await Category.find().limit(10)
        // 发回给客户端，让它知道创建完成了
        res.send(items)
    })

    // 获取详情数据的接口
    router.get('/categories/:id', async (req, res) => {
        const model = await Category.findById(req.params.id)
        // 发回给客户端，让它知道创建完成了
        res.send(model)
    })
    app.use('/admin/api', router)
}