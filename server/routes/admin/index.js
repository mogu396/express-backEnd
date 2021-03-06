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
        const model = await Category.findByIdAndUpdate (req.params.id, req.body)
        res.send(model)
    })

    // 获取分类
    router.get('/categories', async (req, res) => {
        const items = await Category.find().limit(10)
        res.send(items)
    })

    // 删除分类
    router.delete('/categories/:id', async (req, res) => {
        await Category.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success:true,
            deleteObject:req.params.id
        })
    })

    // 获取详情数据的接口
    router.get('/categories/:id', async (req, res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api', router)
}