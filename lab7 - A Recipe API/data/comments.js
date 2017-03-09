const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const recipesData = mongoCollections.recipes;
const recipes = require("./recipes");
const uuid = require('uuid/v1');

let exportedMethods = {
	//,{_id: 1, recipeId:1, poster: 1,comment: 1}
    getComOfRec(id) {
		let ComOfRec = recipes.getRecById(id);
		// console.log(ComOfRec);
		return comments().then((commentCollection) => {
				return commentCollection
					.find({recipeId: id})
					.toArray()
					.then((comm) => {
						//console.log(comm);
						if (!comm) 
							throw "comments not found";
						return comm;
					});
			}).catch((err) => {
			return Promise.reject(err);
		});
	},
      
	getComment(id) {
		if (id === undefined) return Promise.reject("You must provide an ID");
        return comments().then((commentCollection) => {
            return commentCollection
                .findOne({_id: id})
                .then((post) => {
                    if (!post) 
                        throw "Post not found";
                    return post;
                });
        }).catch((err) => {
			return Promise.reject(err);
		});
    },
	/*
	getTitle(id) {
		if (id === undefined) return Promise.reject("You must provide an ID");
        return recipesData().then((postCollection) => {
            return postCollection
                .find({_id: id},{_id: 0, title: 1})
				.toArray()
                .then((post) => {
					//console.log(post);
					// res.json(post);
					// console.log(post[0]);
					let A = post[0];
					let B = A.title;
		console.log("www");
					console.log(B);
		console.log("pppp");
                    return B;
                });
        }).catch((err) => {
			return Promise.reject(err);
		});
	},
	*/
	addComToRec(recId, upPoster, upComments) {
		let commentId = uuid();
		return recipesData().then((postCollection) => {
            return postCollection
                .find({_id: recId},{_id: 0, title: 1})
				.toArray()
                .then((post) => {
					let A = post[0];
					let B = A.title;
                    return B;
                })
				.then((rrr) => {
					return comments().then((comCollection) => {
						let newRec = {
							_id: commentId,
							recipeId: recId,
							recipeTitle: rrr,
							poster: upPoster,
							comment: upComments
						};
						return comCollection
							.insertOne(newRec);
					});
				})
		}).then(() => {
			return recipesData().then((recipesCollection) => {
				recipesCollection.updateOne(
				{_id: recId},
				{
					$addToSet: {
						comments: {
							_id: commentId,
							poster: upPoster,
							comment: upComments
						}
					}
				})
				}).then(() => {
						return this.getComment(commentId);
				})
				}).catch((err) => {
				return Promise.reject(err);
			});
	},
	
	updatePost(id, recipeId, updatedPost) {
		 return recipesData().then((recipesCollection) => {
			let updatedPostData = {};
			if (updatedPost.poster) {
				updatedPostData.poster = updatedPost.poster;
			}
			if (updatedPost.comment) {
				updatedPostData.comment = updatedPost.comment;
			}
			let updateCommand = {
				$set: {comments: updatedPostData}
			};
			
			return recipesCollection.updateOne({
				_id: recipeId
			}, updateCommand)
        }).then(() => {
			return comments().then((postCollection) => {
				let updatedPostData = {};
				if (updatedPost.poster) {
					updatedPostData.poster = updatedPost.poster;
				}
				if (updatedPost.comment) {
					updatedPostData.comment = updatedPost.comment;
				}
				let updateCommand = {
					$set: updatedPostData
				};
				
				return postCollection.updateOne({
					_id: id
				}, updateCommand).then((result) => {
					return this.getComment(commentId);
				});
			}).catch((err) => {
				return Promise.reject(err);
			});
		});
    },
	
	
    removeComments(commentId, recipeId) {
		return recipesData().then((postCollection) => {
            return postCollection
                .updateOne({_id : recipeId}, {$pull:{comments: {_id: commentId}}})
        })
		.then(() => {
			return comments().then((userCollection) => {
				return userCollection
				.removeOne({ _id: commentId })
				.then((deletionInfo) => {
					if (deletionInfo.deletedCount === 0) {
						throw (`Could not delete user with commentId of ${commentId}`)
					}
				});
			});
		}).catch((err) => {
			return Promise.reject(err);
		});
    }
	
	

}

module.exports = exportedMethods;