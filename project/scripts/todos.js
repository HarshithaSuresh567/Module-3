import { displayTodos } from "./displayTodos.js";

let loggedIn = localStorage.getItem("isLoggedIn");

if (loggedIn !== "true") {
    alert("Please login first!");
    window.location.href = "login.html";
}

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayTodos(data.slice(0, 20)))  // show first 20 todos
    .catch(err => console.log(err));
