const todoItems = require("./todo");
const connection = require("./mongoConnection");


function completeAllTasks(allT) {
	for(let i = 0; i < allT.length; ++i){	
		todoItems.completeTask(allT[i]._id)
		.then(() => {
		})
		.catch((err) => {
			console.log(err);
		})
	}
}


todoItems.createTask(
	"Ponder Dinosaurs",
    "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
	)
	.then((task) => {
		//console.log("========firstadd=======");
		console.log(task);
		firstId = task._id;
		return todoItems.createTask(
			"Play Pokemon with Twitch TV",
			"Should we revive Helix?"
			);
	})
	.then((task) => {
		return todoItems.getAllTasks();	
	})
	.then((allT) => {
		console.log("========ALLTASKS=======");
		console.log(allT);
		return todoItems.removeTask(firstId);
	})
	.then((removeRes) => {
		//console.log("========remove=======");
		//console.log(removeRes);
		return todoItems.getAllTasks();
	})
	.then((AllT) => {
		console.log("========ALLTASKS=======");
		console.log(AllT);
		return completeAllTasks(AllT);
	})
	.then((completeT) => {
		//console.log("========completed=======");
		//console.log(completeT);
		return todoItems.getAllTasks();
	})
	.then((allTaskk) => {
		console.log("========ALLTASKS=======");
		console.log(allTaskk);
	})
	.catch((err) => {
		console.log(err);
	})


		

	