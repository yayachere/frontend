
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addList() {

    if(inputBox.value === '') {
        alert("You must type something");
    }
    else {
        var li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        var span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();

        inputBox.value = '';
    }
}

listContainer.addEventListener("click", (e)=>{

    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();