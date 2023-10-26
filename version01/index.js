const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container")

function add_task() {
  if(input_box.value === "") {
    alert("Enter a valid task")
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    list_container.appendChild(li);
    
    let span = document.createElement("span")
    span.innerHTML ="\u00d7";
    li.appendChild(span);
  }
  input_box.value = "";
  save_data();
}

list_container.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  save_data();
}, false);

function save_data() {
  localStorage.setItem("data", list_container.innerHTML);
}

function show_task() {
  list_container.innerHTML = localStorage.getItem("data");
}

window.addEventListener("DOMContentLoaded", show_task());