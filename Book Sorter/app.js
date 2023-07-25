// Book Constructor

function Book(title , author , isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn ;


    
}

// UI constructor

function UI(){}



//UI Prototype to Create Element

UI.prototype.addbooktolist = function(book){

    const list = document.getElementById('book-list')

    let row = document.createElement('tr');
    
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete-item">X</a></td>
    `
    list.appendChild(row);

}

//UI prototype to clear Fields

UI.prototype.clearfield = function(book){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}


//Validating the Form By Showing Alert

UI.prototype.showalert = function(message , classname){

    const div = document.createElement('div');

    div.className = `alert ${classname}`;

    div.appendChild(document.createTextNode(message));

    const box = document.querySelector('.container')
    const form = document.querySelector('#book-form');

    box.insertBefore(div , form);

    setTimeout(() => {
        document.querySelector('.alert').remove(); 
    }, 3000);


}


// Delete Book

UI.prototype.deleteitems = (target)=>{
    if ( target.className === 'delete-item'){
        target.parentElement.parentElement.remove();
    }
}


// Adding Event Listener  to Add Books 

document.getElementById('book-form').addEventListener('submit' , function(e){
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    const book =  new Book (title,author,isbn)

    const ui = new UI();

    if (title === '' || author === '' || isbn === ''){
        ui.showalert('Please Fill All Fields' , 'error');
    }
    else{

        ui.addbooktolist(book);
        
        
        ui.clearfield(book);
        ui.showalert('Book Added Successfully!' , 'success')
    }

    e.preventDefault();
})

//Event Listener To delete Books 

document.querySelector('#book-list').addEventListener('click',function (e){


    const ui = new UI();

    ui.deleteitems(e.target);

    ui.showalert('Book removed', 'success')


});