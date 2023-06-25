const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = async ()=>{
    try{
        mongoose.connect(process.env.Databse_URL, 
            {
                useNewUrlParser : true,
                useUnifiedTopology : true
            })
            console.log(" DB Connection Successful ");
    }
    catch(err){
        console.log('Error connecting to DB');
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = dbConnect;




