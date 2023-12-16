let input = document.getElementById('TodoInput');

let btn = document.getElementById('btn');

let todoList = document.getElementById('todolist');

input.style.backgroundColor = "dodgerblue";
input.style.padding = "15px 20px";
btn.style.padding = "15px 20px";
btn.style.borderRadius = "0px";
let errorText = document.getElementById('errorText');

btn.onclick = () => {
    if (input.value.trim()) {
        let li = document.createElement("li");
        let delBtn = document.createElement("button");
        let doBtn = document.createElement("button");
        delBtn.textContent = "O'chir";
        doBtn.textContent = "DO"
        doBtn.style.backgroundColor = "grey";
        delBtn.style.backgroundColor = "red";
        doBtn.style.padding = "10px 20px";
        delBtn.style.padding = "10px 20px";


        li.textContent = input.value.trim();
        li.style.gap = ""
        li.appendChild(doBtn);
        li.appendChild(delBtn);
        todoList.appendChild(li);
        delBtn.onclick = () => {
            todoList.removeChild(li);
        }
        doBtn.onclick = () => {
            doBtn.textContent = "Yakunlangan";
            doBtn.style.backgroundColor = "green";
            li.removeChild(delBtn);
            li.style.color = "green";
        }

        
        input.value = "";

        localStorage.setItem("input", input.value)
        return;
    }
    errorText.textContent = "Qiymat kiriting!";
    errorText.style.display = 'block';


}

Storage.innerText += localStorage.getItem("input");