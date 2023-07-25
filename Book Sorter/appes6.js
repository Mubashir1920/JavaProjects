

class Book {
    constructor(title , author , isbn){
        this.title =title
        this.author =author
        this.isbn = isbn
    }

}

class UI {
    addbooktolist(book){

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

    clearfield(book){

        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''

    }

    showalert(message , classname){


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
    deleteitems(target){

        if ( target.className === 'delete-item'){
            target.parentElement.parentElement.remove();
        }

    }
}




class Store {
    static  getbooks(){
        let books;
        if (localStorage.getItem('books')=== null ){
            books=[];
        }else{
            books=JSON.parse( localStorage.getItem('books'));

        }

        return books;


    }

    static  addbook(book){

        const books = Store.getbooks();

        books.push(book)

        localStorage.setItem('books' , JSON.stringify(books))

    }

    static   displaybooks(book){
        const books = Store.getbooks();

        books.forEach((book) => {
            const ui = new UI;

            ui.addbooktolist(book);
        });

    }

    static    deletebooks(isbn){
        const books = Store.getbooks();
        
        books.forEach(function(book , index){
            if(book.isbn === isbn ){
                books.splice(index , 1);
            }
        });
        localStorage.setItem('books' , JSON.stringify(books))
    }

    static clearall (){

        // const books = Store.getbooks();
        
        // books.forEach(function(book,index){
        //     books.splice(index, 1);
        // });

        const li = document.querySelector('#book-list');

        while(li.firstElementChild){
            li.removeChild(li.lastChild) ;
        };
        



        localStorage.clear();
    }


}



// DOM Load Event 

document.addEventListener('DOMContentLoaded', Store.displaybooks())

// Clear All Entries
document.querySelector('.clear').addEventListener('click' , ()=>{
    Store.clearall();
});

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
        
        Store.addbook(book);
        
        ui.clearfield(book);
        ui.showalert('Book Added Successfully!' , 'success')
    }

    e.preventDefault();
})

//Event Listener To delete Books 

document.querySelector('#book-list').addEventListener('click',function (e){


    const ui = new UI();

    ui.deleteitems(e.target);


    Store.deletebooks(e.target.parentElement.previousElementSibling.textContent);

    ui.showalert('Book removed', 'success')


}); 