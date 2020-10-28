
// Store all the books (Global variable)
let myLibrary = [];

// Listening to sumbmission of forms for the book details
let form1 = document.getElementById('form-1');
let container2 = document.getElementById('container2');


form1.addEventListener('submit', collectData);
container2.addEventListener('click', deleteBook);


function collectData(e){
    // prevent submission of form to other types
    e.preventDefault()

    // Get the details form form submission
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;

    
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let book_p = document.createElement('p');

    // Adding the div for the box
    let div = document.createElement('div');
    // let br = document.createElement('br')
    let buttonT = document.createElement('button');

    buttonT.className = "delete-button"

    div.className = "box-hold";

    p1.className = 'author-val';
    p2.className = 'title-val';

    // Add author, title and book to each p element
    p1.appendChild(document.createTextNode(`Author: ${author}`));
    p2.appendChild(document.createTextNode(`Title: ${title}`));
    book_p.appendChild(document.createTextNode('Book')) 
    buttonT.appendChild(document.createTextNode('Delete Book'));
    
    div.appendChild(book_p);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(buttonT);
    

    // container2.appendChild(br)
    container2.appendChild(div);

    myLibrary.push(addBook(title, author));
}


function addBook(title, author) {
    let library = Object.create(null);

    library = [{'title':title, 'author':author}];

    return library;
}

function deleteBook(e) {
    if(e.target.classList.contains('delete-button')) {
        if(confirm('Are you sure you want to delete this?')) {
            let div = e.target.parentNode;
            container2.removeChild(div);
        }
    }
}

// myLibrary = addBook('The way', 'Lue');

// console.log(myLibrary);


// Need to fix the append issue

