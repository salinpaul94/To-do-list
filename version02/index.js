const input_box = document.getElementById("input-box");
const list_container = document.getElementById("list-container");
let localStorage;

function selectLocalStorage(storage){
  if(storage === "office") {
    localStorage = "office";
  } else {
    localStorage = "personal";
  }
}

function add_task() {
  if(input_box.value === "") {
    document.querySelector(".error").style.display = "block";
  } 
  else {
    document.querySelector(".error").style.display = "none";
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
  localStorage.setItem("test", list_container.innerHTML);
}

function show_task() {
  list_container.innerHTML = localStorage.getItem("data");
}

window.addEventListener("DOMContentLoaded", show_task());