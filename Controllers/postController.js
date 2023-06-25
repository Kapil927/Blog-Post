const Post = require('../Modles/PostModle');

exports.createPost = async (req, res)=>{
    try{
        const {title, description} = req.body;
        const post = new Post({ title, description });
        const savedPost = await post.save();
        
        res.json(
            {
                post : savedPost
            }
        );
    }
    catch(err){
        console.log("Error while creating a Post");
        console.error(err.message);
        return res.status(400).json(
            {
                error : "Error while creating a Post" 
            }
        );
    }
}

exports.getAllPost = async (req, res) =>{
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}