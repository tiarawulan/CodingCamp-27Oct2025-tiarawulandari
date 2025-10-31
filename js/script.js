

// tempat penyimpnan
let todos = [];

function validateForm(todo,date){
    if(todo.trim() === '' || date ===  ''){
        // alert ('plese enter a todo item and select a due date')
        return false;
    }
    return true;

}

function addtodo(){
    const todoInput = document.getElementById('todo-input').value;
    const todoDate = document.getElementById('todo-date').value;

    if (!validateForm(todoInput,todoDate)){
        alert(' form validate failed. please chek your input')
    } else {
        console.log('Todo added:', todoInput, 'Due date:',todoDate);

        // menyimpan
        todos.push({task: todoInput, dueDate: todoDate});

        rendertodos();
        document.getElementById('todo-input').value = '';
        document.getElementById('todo-date').value = '';
       
    }

}


function deletetodo(index) {
    todos.splice(index, 1); // hapus berdasarkan urutan
    rendertodos();
}



// function filtertodo() {
//     const filterText = prompt("Masukkan teks untuk filter (boleh dikosongkan):")?.toLowerCase() || '';
//     const filterDate = prompt("Masukkan tanggal (YYYY-MM-DD), boleh dikosongkan:") || '';

//     const filtered = todos.filter(todo => {
//         const matchText = todo.task.toLowerCase().includes(filterText);
//         const matchDate = filterDate ? todo.dueDate === filterDate : true;
//         return matchText && matchDate;
//     });

//     const todoList = document.getElementById('todo-list');
//     todoList.innerHTML = '';

//     if (filtered.length === 0) {
//         todoList.innerHTML = '<li>Tidak ada todo yang cocok dengan filter</li>';
//         return;
//     }

//     filtered.forEach((todo, index) => {
//         todoList.innerHTML += `
//         <li class="flex justify-between items-center bg-white/20 p-2 rounded mb-2 text-gray-100">
//             <span>${todo.task} - <span class="text-sm text-gray-300">${todo.dueDate}</span></span>
//             <button onClick="deletetodo(${index})" class="bg-red-500 hover:bg-red-600 text-sm px-2 py-1 rounded">Delete</button>
//         </li>`;
//     });
// }
function filtertodo() {
    const filterInput = prompt("Masukkan teks atau tanggal (format YYYY-MM-DD), boleh dikosongkan:")?.toLowerCase() || '';
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (!filterInput) {
        // kalau kosong, tampilkan semua todo
        todos.forEach((todo, index) => {
            todoList.innerHTML += `
            <li class="flex justify-between items-center bg-white/20 p-2 rounded mb-2 text-gray-100">
                <span>${todo.task} - 
                <span class="text-sm text-gray-300">${todo.dueDate}</span></span>
                <button onClick="deletetodo(${index})" 
                        class="bg-red-500 hover:bg-red-600 text-sm px-2 py-1 rounded">Delete</button>
            </li>`;
        });
        return;
    }

    const filtered = todos.filter(todo => {
        const taskMatch = todo.task.toLowerCase().includes(filterInput);
        const dateMatch = todo.dueDate === filterInput;
        return taskMatch || dateMatch; // cocok kalau salah satu sesuai
    });

    if (filtered.length === 0) {
        todoList.innerHTML = '<li class="text-gray-200">Tidak ada todo yang cocok</li>';
        return;
    }

    filtered.forEach((todo, index) => {
        todoList.innerHTML += `
        <li class="flex justify-between items-center bg-white/20 p-2 rounded mb-2 text-gray-700">
            <span>${todo.task} -
            <span class="text-sm text-gray-700">${todo.dueDate}</span></span>
            <button onClick="deletetodo(${index})" 
                    class="bg-red-500 hover:bg-red-600 text-sm px-2 py-1 rounded">Delete</button>
        </li>`;
    });
     document.getElementById('reset-filter-btn').classList.remove('hidden');
}


function rendertodos(){
    const todoList = document.getElementById('todo-list');

    // clear
    todoList.innerHTML = '';

    todos.forEach((todo, index) =>{
    todoList.innerHTML += `<li class="flex justify-between items-center bg-white/20 p-2 rounded mb-2 text-gray-100">
        <span class="text-sm text-gray-800">${todo.task} - ${todo.dueDate}</span>
        <button onClick="deletetodo(${index})" class="bg-red-500 hover:bg-red-600 text-sm px-2 py-1 rounded">Delete</button>
    </li>`;
    });
    
}
    function deleteAllTodos() {
    if (todos.length === 0) {
        alert("Tidak ada todo yang bisa dihapus.");
        return;
    }

    const konfirmasi = confirm("Apakah kamu yakin ingin menghapus semua todo?");
    if (konfirmasi) {
        todos = []; // kosongkan array
        rendertodos(); // render ulang tampilan agar list hilang
    }
}
function risettodo() {
  rendertodos(); // tampilkan semua todo seperti semula
  document.getElementById('reset-filter-btn').classList.add('hidden'); // sembunyikan tombol reset



}



//     let todos = [];

//     function validateForm(todo, date) {
//       return !(todo.trim() === '' || date === '');
//     }

//     function addtodo() {
//       const todoInput = document.getElementById('todo-input').value;
//       const todoDate = document.getElementById('todo-date').value;

//       if (!validateForm(todoInput, todoDate)) {
//         alert('Form tidak valid. Silakan isi dengan benar.');
//         return;
//       }

//       todos.push({ task: todoInput, dueDate: todoDate });
//       rendertodos();

//       // reset input
//       document.getElementById('todo-input').value = '';
//       document.getElementById('todo-date').value = '';
//     }

//     function deletetodo(index) {
//       todos.splice(index, 1);
//       rendertodos();
//     }

//     function filtertodo() {
//       const filterText = prompt("Masukkan teks untuk filter (boleh kosong):")?.toLowerCase() || '';
//       const filterDate = prompt("Masukkan tanggal (YYYY-MM-DD), boleh kosong:") || '';

//       const filtered = todos.filter(todo => {
//         const matchText = todo.task.toLowerCase().includes(filterText);
//         const matchDate = filterDate ? todo.dueDate === filterDate : true;
//         return matchText && matchDate;
//       });

//       const todoList = document.getElementById('todo-list');
//       todoList.innerHTML = '';

//       if (filtered.length === 0) {
//         todoList.innerHTML = '<li class="text-gray-400">Tidak ada todo yang cocok dengan filter</li>';
//         return;
//       }

//       filtered.forEach((todo, index) => {
//         todoList.innerHTML += `
//           <li class="flex justify-between items-center bg-white/20 p-2 rounded">
//             <span>${todo.task} - <span class="text-sm text-gray-300">${todo.dueDate}</span></span>
//             <button onclick="deletetodo(${index})" class="bg-red-600 hover:bg-red-700 text-sm px-2 py-1 rounded">Delete</button>
//           </li>`;
//       });
//     }

//     function rendertodos() {
//       const todoList = document.getElementById('todo-list');
//       todoList.innerHTML = '';

//       todos.forEach((todo, index) => {
//         todoList.innerHTML += `
//           <li class="flex justify-between items-center bg-white/20 p-2 rounded">
//             <span>${todo.task} - <span class="text-sm text-gray-300">${todo.dueDate}</span></span>
//             <button onclick="deletetodo(${index})" class="bg-red-600 hover:bg-red-700 text-sm px-2 py-1 rounded">Delete</button>
//           </li>`;
//       });
//     }
//     function deleteAllTodos() {
//     if (todos.length === 0) {
//         alert("Tidak ada todo yang bisa dihapus.");
//         return;
//     }

//     const konfirmasi = confirm("Apakah kamu yakin ingin menghapus semua todo?");
//     if (konfirmasi) {
//         todos = []; // kosongkan array
//         rendertodos(); // render ulang tampilan agar list hilang
//     }
// }
