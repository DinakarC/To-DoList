const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

function addTask(){
    if(inputBox.value == ''){
        alert("It is empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
}
listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData()
}, false);

function saveData(){
    localStorage.setItem("To-dodata", listCont.innerHTML)
}
function showTask(){
    listCont.innerHTML = localStorage.getItem("To-dodata")
}
showTask();