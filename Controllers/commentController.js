//import models
const post = require("../Modles/PostModle");
const Comment = require("../Modles/commentModle");

exports.createComment = async (req, res)=>{
    try{
        const {postId, comment, user  } = req.body;
        const newComment = new Comment(
            {postId, user, comment }
        );
        const savedComment =  await newComment.save();
        
       const updatedPost = await post.findByIdAndUpdate(postId,{$push:{comments:savedComment._id}}, {new : true}).populate("comments").exec();

        res.json(
            {
                post : updatedPost
            }
        );
    }
    catch(err){
        console.log("Error while creating a comment");
        console.error(err.message);
        return res.status(500).json(
            {
                error : "Error while creating a comment"
            }
        );
    }
}