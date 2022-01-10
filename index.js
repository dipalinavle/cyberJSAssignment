// Write Javascript Here
const baseUrl = "http://localhost:3000/users";
const headers = {
    'Content-type': 'application/json; charset=UTF-8'
};



getUsersRequest().then(users =>{
    //This function has been implemented already for you
    const tableEl = document.getElementById("table");
    for (const user of users) {
        tableEl.appendChild(createTableRow(user))
    }
})


function addNewUser(){
    //TODO: Implement me
	let Name = prompt('Add User');
	if(Name){
		const userInput={'name':Name};
	createUserRequest(userInput);
	 const tableEl = document.getElementById("table");
	  tableEl.appendChild(createTableRow(userInput));
   }
	
}



function editUser(id, userName){
	   //TODO: implement me
    	let Name = prompt('Edit User' , userName );
		const userInput={'name':Name , 'id':id};
		updateUserRequest(userInput);
		window.location.reload();
}

function deleteUser(id){
    //TODO: implement me
	deleteUserRequest(id);
    window.location.reload();
}




//CRUD HELPER METHODS
function createUserRequest(user){
    return fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


function  getUsersRequest()  {
    return fetch(baseUrl, {
        method: 'GET',
    }).then(response => response.json())
}

function  deleteUserRequest(id)  {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
}


function updateUserRequest(user){
    return fetch(`${baseUrl}/${user.id}`, {
        method: 'PATCH',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


//HELPER METHODS
function createTableRow(user){
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.name}</td> <td><a href="#" onclick="editUser(${user.id}, '${user.name}')">Edit</a> / <a href="#" onclick="deleteUser(${user.id})">Delete</a></td>`;
    return tr;
}
