const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('uuid/v1');

let exportedMethods = {
	
	
    getAllRecipes() {
        return recipes().then((postCollection) => {
            return postCollection
                .find({}, {title:1})
                .toArray()
				.then((post) => {
					if (!post)
						reject("post not found");
					return post;
				});
        }).catch((err) => {
			return Promise.reject(err);
		});
    },

	
    getRecById(id) {
		if (id === undefined) return Promise.reject("You must provide an ID");
        return recipes().then((postCollection) => {
            return postCollection
                .findOne({_id: id})
                .then((post) => {
					//console.log(post);
                    if (!post) 
                        throw "Post not found";
                    return post;
                });
				
        }).catch((err) => {
			return Promise.reject(err);
		});
    },
	
    addRec(title, ingredients, steps) {
        if (typeof title !== "string") 
            return Promise.reject("No title provided");
        if (!Array.isArray(ingredients)) {
            ingredients = [];
        }
        if (!Array.isArray(steps)) {
            steps = [];
        }
        return recipes().then((postCollection) => {
			let id = uuid();
			let newRec = {
				_id: id,
				title: title,
				ingredients: ingredients,
				steps: steps,
				comments: []
			};
			return postCollection
				.insertOne(newRec)
				.then(() => {
					return this.getRecById(id);
				});
		}).catch((err) => {
			return Promise.reject(err);
		});
    },
	
	

	
	
	
	updateRec(id, updatedPost) {
		return recipes().then((postCollection) => {
			let updatedPostData = {};
			if (updatedPost.title) {
				updatedPostData.title = updatedPost.title;
			}
			if (updatedPost.ingredients) {
				updatedPostData.ingredients = updatedPost.ingredients;
			}
			if (updatedPost.steps) {
				updatedPostData.steps = updatedPost.steps;
			}
			let updateCommand = {
				$set: updatedPostData
			};
			
			return postCollection.updateOne({
				_id: id
			}, updateCommand).then((result) => {
				return this.getRecById(id);
			});
		}).catch((err) => {
			return Promise.reject(err);
		});
    },
	
	
    removePost(id) {
        return recipes().then((postCollection) => {
            return postCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete post with id of ${id}`)
                    } else {}
                });
        });
    }
}

module.exports = exportedMethods;