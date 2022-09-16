///////
///////Made by Omit Gaming
//////
const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Wait Some Minutes To See Your RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("OMIT GAMING CODEZ RPC IS READY")});
}
module.exports = keepAlive

///////
///////Made by Omit Gaming
//////