const express = require('express');
const dbConnect = require('./Config/Database');
const dotenv = require('dotenv');

const app = express();
dotenv.config(); // to load all cofigurationof env file in process object.
const Port = process.env.Port || 3000; // we can access the env data using process object only.
app.use(express.json());


const routes = require('./Routes/routes'); // ye jabtak nahi likhe ga tab tak compass me db show nahi hoga, kyuki db name and and collection name both are required to creat db in compass
app.use('/api/v1', routes);

app.listen(Port,()=>{console.log(` ${Port} Port is active `)}); 
dbConnect();

app.get('/',(req, res)=>{ // defult route
    res.send(`<center>
                <h1 style="color:blue"> 
                   Home page /
                </h1>
              </center>`);
})