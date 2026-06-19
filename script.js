// Form Validation

document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name === "" || email === ""){
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
    }
    else if(!email.match(emailPattern)){
        message.innerHTML = "Enter valid email!";
        message.style.color = "red";
    }
    else{
        message.innerHTML = "Form Submitted Successfully!";
        message.style.color = "green";
    }
});


// Dynamic To-Do List

function addTask(){

    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if(taskInput.value === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
    taskInput.value +
    ' <button onclick="this.parentElement.remove()">Delete</button>';

    taskList.appendChild(li);

    taskInput.value = "";
}
