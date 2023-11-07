
const Post = require('../model/post');

module.exports.home = async function (req, res) {
    try {
        const posts = await Post.find({}).populate('user').exec();
        console.log('Posts:', posts); // Add this line for debugging
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts
        });
    } catch (error) {
        console.log('An error occurred:', error);
        return res.status(500).send('An error occurred'); // You can customize the error response as needed.
    }
};


// module.exports.actionName = function(req, res){}