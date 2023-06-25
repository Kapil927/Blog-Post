const like  = require('../Modles/likeModle')
const post  = require('../Modles/PostModle')

exports.likePost = async (req, res)=>{
    try{
        const {postId, user} = req.body;
        
        const likeData = new like({postId, user});
        const savedLike = await likeData.save();

        const updatedPost = await post.findByIdAndUpdate(postId, {$push : {likes : savedLike._id}}, {new:true}).populate("likes").exec();
        
        res.json(
            {
                post : updatedPost
            }
        );
    }
    catch(err){
        console.log('Error while liking post');
        console.error(err.message);
       return res.status(400).json(
            {
                error: "Error while liking post"
            }
        );
    }
    
}

exports.unlikePost = async (req, res) =>{
    try{
        const {postId, likeId} = req.body;
        const unliked = await like.findOneAndDelete({_id:likeId, postId:postId});
        const updatedPost = await post.findByIdAndUpdate(postId, {$pull : {likes : unliked._id}},{new : true});
        res.json(
            {
                post : updatedPost
            }
        );
    }
    catch(err){
        console.log('Error while UnLiking post');
        console.error(err.message);
     return res.status(400).json(
        {
            error: "Error while Unliking post"
        }
     )   
    }
}