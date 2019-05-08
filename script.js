class data {

    constructor(){
        this.todos = [];
    }

    static setTodo(todo) {
        this.todos = todos.push(todo)
    }
}



// Create New admin
class WhatToDo {
    constructor(text, isEdit, isDone) {
        this.sort = 1;
        this.time = new Date().getTime();
        this.text = text;
        this.isEdit = isEdit;
        this.isDone = isDone;
    }
}

data.setTodo(new WhatToDo('hello brother ami bolbona', false, false))




// Getting form values
/* const adminForm = document.querySelector('#form_admin');
adminForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const institute_name = e.target[0].value
    const admin_name = e.target[1].value
    const password = e.target[2].value

    var admin = new Admin(institute_name, admin_name, password)
    //console.log(admin);

    DB.put('admin', admin)
    //var hello = DB.get('admin')
    //console.log(hello);

}) */




// Database
class DB {
    // To Store New value to existing table
    static put(title, value) {
        const data = DB.get(title)
        data.push(value)

        console.log(JSON.stringify(data));
        localStorage.setItem(title, JSON.stringify(data))
    }

    // To delete or destroy a table
    static destroy(title) {
        localStorage.removeItem(title)
    }

    // To delete single row or value from a table
    static delete(title, value) {
        localStorage.removeItem(title)
    }

    // To get item from DB
    static get(title) {
        let data;
        if (localStorage.getItem(title) === null) {
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(title))
        }

        return data;
    }
}