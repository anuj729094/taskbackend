const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const user = require('./models/userschema')
require('./connection/db')
app.use(cors())
app.use(express.json())
app.use(require('./routes/user'))
app.use(require('./routes/note'))

app.get('/' , async(req,res)=>{
    return res.json({msg:"server started"})
})

app.listen(port , ()=>{
    console.log(`Server started at ${port}`);
})