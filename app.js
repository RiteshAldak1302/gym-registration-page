const express = require('express');
const path = require('path')
const app = express()
const port = 3000
const fs = require('fs')


// set the view engine
app.set("view engine","pug");
app.use('/static', express.static('static'))
app.use(express.urlencoded());   //this is the midware which is used to get the data from the client 

app.post('/' , (req , res)=>{
    Name = req.body.name 
    age = req.body.age
    gender = req.body.gender
    email = req.body.email
    phone = req.body.phone
    address = req.body.address
    more = req.body.more

    let outputToWrite =`The name of the client is ${Name} ,${age} year old ,${gender}, residing at ${ address} and more about him/her :${more}`;
   fs.writeFileSync('output.txt',outputToWrite )
   res.status(200).render('index.pug');
})


// app.set('views', path.join(__dirname,'views'))
// routing of index.pug file
app.get("/" , (req , res)=>{
    res.render("index");
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
});