const express = require('express')

const app = express()

// 解决跨域
app.use(require('cors')())
// 使用express解析json
app.use(express.json())

require('./plugins/db')(app)

require('./routes/admin')(app)

app.get('/' ,async (req,res)=>{
    res.send('hello')
})

app.listen(3000, () => {
    console.log('http://localhost:3000');
})