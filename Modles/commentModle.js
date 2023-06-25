const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        postId :{type : mongoose.Schema.Types.ObjectId, ref : "post"},
        user : {type : String, required : true,},
        comment : {type : String, required : true,},
    }
);

module.exports = mongoose.model("comment", commentSchema);