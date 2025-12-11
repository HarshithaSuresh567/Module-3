export function displayTodos(data) {
    let container = document.getElementById("todos");

    data.forEach(todo => {
        let div = document.createElement("div");
        div.style.border = "1px solid #333";
        div.style.margin = "10px";
        div.style.padding = "10px";

        div.innerHTML = `
            <h3>ID: ${todo.id}</h3>
            <p>Title: ${todo.title}</p>
            <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
        `;

        container.appendChild(div);
    });
}
