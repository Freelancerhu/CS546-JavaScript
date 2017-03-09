const express = require('express');
const router = express.Router();
const data = require("../data");
const commentsData = data.comments;
const mongoCollections = require("../config/mongoCollections");
const recipesData = mongoCollections.recipes;

router.get("/recipe/:recipeId", (req, res) => {
	//console.log(req.params.recipeId);
    return commentsData.getComOfRec(req.params.recipeId).then((post) => {
		//console.log("bbb");
        res.json(post);
    }).catch((error) => {
        res.status(404).json({ error: "RecipeID not found" });
    });
});



router.get("/:commentId", (req, res) => {
    return commentsData.getComment(req.params.commentId).then((post) => {
        res.json(post);
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });
});



router.post("/:recipeId", (req, res) => {
    let blogPostData = req.body;

    if (!blogPostData) {
        res.status(400).json({ error: "You must provide data to create a comment" });
        return;
    }
    commentsData.addComToRec(req.params.recipeId, blogPostData.poster, blogPostData.comment)
        .then((newPost) => {
            res.json(newPost);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});


router.put("/:recipeId/:commentId", (req, res) => {
    let updatedData = req.body;

   

        return commentsData.updatePost(req.params.commentId, req.params.recipeId,updatedData)
            .then((updatedPost) => {
                res.json(updatedPost);
            }).catch((e) => {
                res.status(500).json({ error: e });
            }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });

});

router.delete("/:recipeId/:commentId", (req, res) => {
    return commentsData.removeComments(req.params.commentId, req.params.recipeId)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            }).catch(() => {
				res.status(404).json({ error: "Post not found" });
			});
});

module.exports = router;