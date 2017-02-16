const mongoCollections = require("./todoItems");
const todoItems = mongoCollections.todoItems;
const uuidV1 = require('uuid/v1');

module.exports = {
	getTask(id){
		return new Promise((fulfill, reject) => {
			if(!id){
				reject("You must provide an id");
			}
			return todoItems().then((todoItemsCollection) =>{
				return todoItemsCollection.findOne({_id: id});
			})
			.then((task) => {
				fulfill(task);
			})
			.catch(err => {
				reject(err);
			})
		})
	},
	getAllTasks(){
		return new Promise((fulfill, reject) => {
			todoItems()
				.then(collection => {
					return collection.find().toArray();
				})
				.then(arr => {
					fulfill(arr);
				})
				.catch(err => {
					reject(err);
				})
		});
	},
	createTask(title, description){
		if( !title){
			return Promise.reject("You must provide a title.");
		}
		if( !description){
			return Promise.reject("You must provide a description.");
		}
		let id = uuidV1();
		
		return todoItems().then((todoItemsCollection) =>{
			
			let updatedItems = {
				_id : id,
				title : title,
				description : description,
				completed: false,
				completedAt: null
			};
			
			return todoItemsCollection
				.insertOne(updatedItems)
				.then((newInsertInfo) => {
					return newInsertInfo.insertedId;
				})
				.then((newId) => {
					return this.getTask(newId);
				})
				.catch((err) =>{
					reject(err);
				})
		});
	},
	removeTask(id){
		return new Promise((fulfill, reject) => {
			if(!id){
				reject("You must provide an id.");
			}
			return todoItems()
				.then((todoItemsCollection) => {
					return todoItemsCollection
						.removeOne({_id: id})
						.then((deleteInfo) => {
							if (deleteInfo.deletedCount === 0) {
								reject(`Could not delete task with id of ${id}`);
							}
							else
								fulfill(`Successfully delete ${id}`);
						})
						.catch((err) => {
							reject(err);
						});
				});	
		});
	},
	completeTask(id){
		if(!id){
			return Promise.reject("You must provide an id.");
		}
		return todoItems().then((todoItemsCollection) => {
			let timeDate = (new Date()).toLocaleString();
			
			
			return todoItemsCollection.updateOne({
				_id: id
			}, {
				$set: {
					completed: true,
					completedAt: timeDate
				}
			}).then(() => {
				return this.getTask(id);
			})
			.catch((err) => {
				reject(err);
			});
		});
	}
}