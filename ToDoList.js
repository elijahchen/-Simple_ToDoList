console.log("CONNECTED");
var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//Handle input
	if(input === "list"){
		listTodos();
	} else if(input === "new"){
		addTodo();
	} else if(input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log("Quiting Application");

function listTodos(){
	console.log("*****");
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("*****");
}

function addTodo(){
	//Prompt for new todo
	var newTodo = prompt("Enter new todo");
	//Add to todos array
	todos.push(newTodo);
	console.log("Added Todo")
}

function deleteTodo(){
	//Ask for index of todo to be deleted
	var index = prompt("Enter index of todo to delete")
	//Delete todo using splice
	todos.splice(index, 1);
	console.log("Deleted Todo")
}