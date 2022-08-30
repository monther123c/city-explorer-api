require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server =express();
const wetherData =require('./data/weather.json');

server.use(cors()); 

const PORT =process.env.PORT;// make the server opened for any request


server.get('/',(req,res)=>{
    
    res.send("Hi from the home roure");
})

server.get('/getWetherCityName',(req,res)=> {
    let wetherCityName = wetherData.map((item)=>{
        return item.city_name;
    })
    res.send(wetherCityName);
})

server.get('/getWetherData',(req,res)=>{
    console.log(req.query.name);
    const result = wetherData.find(item=>{
        if(item.city_name==req.query.name)
        {
            return item;
        }
        else 
        {return true};
    })
    res.send(result);
})

server.get('*', (req,res)=>{     // if the user put anything not exist 
   
    res.send("page not found");
})

server.listen(PORT,()=>{
    console.log(`Hello, I am listening on ${PORT}`)
})