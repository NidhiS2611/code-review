const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const airoutes = require('./src/routes/ai.routes')

app.get('/',(req,res)=>{
    res.send('hello worls')

})
app.use('/ai',airoutes)

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})

