const mongoose = require('mongoose');

const postSchema = new mongoose.Schema( // to create schema we use new keyword
    {
        title:
        {
            type : String,
            required : true, 
        },
        description :
        {
            type : String,
            required : true,
        },
        likes:[
            {
                type :mongoose.Schema.Types.ObjectId,
                ref : 'like'
            }
        ],
        comments:
        {
            type : [
                {
                    type :mongoose.Schema.Types.ObjectId,
                    ref : 'comment'
                }
            ],
        }                
    }
);
module.exports = mongoose.model("post",postSchema); // mongoose.model is used to give name to our schema