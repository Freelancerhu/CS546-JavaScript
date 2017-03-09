const express = require('express');
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

router.get("/", (req, res) => {
    recipesData.getAllRecipes().then((postList) => {
        res.json(postList);
    }, () => {
        res.status(500).send();
    });
});



router.get("/:id", (req, res) => {
    recipesData.getRecById(req.params.id).then((post) => {
        res.json(post);
    }).catch((error) => {
        res.status(404).json({message: "Post not found"});
    });
});



router.post("/", (req, res) => {
    let recPostData = req.body;
	return recipesData.addRec(recPostData.title, recPostData.ingredients, recPostData.steps, recPostData.comments)
        .then((newPost) => {
            res.json(newPost);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
    res.status(501).send();
});


router.put("/:id", (req, res) => {
	let updatedData = req.body;
	let getPost = recipesData.getRecById(req.params.id);
	
	getPost.then(() => {
        return recipesData.updateRec(req.params.id, updatedData)
            .then((updatedPost) => {
                res.json(updatedPost);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });
	
	
});

router.delete("/:id", (req, res) => {
    let getPost = recipesData.getRecById(req.params.id);

    getPost.then(() => {
        return recipesData.removePost(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });
});



module.exports = router;