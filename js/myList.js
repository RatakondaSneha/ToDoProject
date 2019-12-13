function addNewList()
{

    event.preventDefault();

    const todo = document.querySelector('#listText');
    const value = todo.value.trim();

    if (value.length > 0) {
        const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4) + Math.random().toString(36).substr(3, 4)).toUpperCase();

        const id = `todo-select-${hash}`;
        const template = document.querySelector('#item-lists');
        const item = document.importNode(template.content, true);
        const label = item.querySelector('label[for]');
        const input = item.querySelector('#todo-checkbox')
        const list = document.querySelector('#todo-myList');

        input.setAttribute('id', id);
        label.setAttribute('for', id);

        label.textContent = value;

        const database = window.localStorage;
        const itemString = new XMLSerializer().serializeToString(item);
        database.setItem(id, itemString);


        list.appendChild(item);
    }

    todo.value = '';

}

function todoDelete(elem){
const key = elem.parentNode.querySelector("input[type=checkbox]").id;
const database=window.localStorage;
database.removeItem(key);
elem.parentNode.remove();
}

function checkBoxUpdate(checkbox) {
   
    if (checkbox.checked) {
        checkbox.setAttribute('checked', checkbox.checked);
       
       
       
    } else {
        checkbox.removeAttribute('checked');
      
    }
    const item = new XMLSerializer().serializeToString(checkbox.parentNode);
    const checkBoxid = checkbox.id;
    window.localStorage.setItem(checkBoxid, item);
}

function bindAddEventListener() 
{
    let btn = document.querySelector('#add-img');
    btn.addEventListener('click', addNewList);
    linkToDos();

    window.addEventListener('online', (event) => {
        document.getElementById("messageID").innerHTML = "Application is offline";
    });
    window.addEventListener('offline', (event) => {
        document.getElementById("messageID").innerHTML = "Connection is back";
    });
}

function linkToDos(){
    const dataObj = window.localStorage;
    Object.keys(dataObj).forEach(addStoredItems);

}
function addStoredItems(item) {
    const db = window.localStorage;
    const list = document.querySelector('#todo-myList');
    const node = document.createRange().createContextualFragment(db.getItem(item));
    list.appendChild(node);
}
bindAddEventListener();