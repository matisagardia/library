// Set an empty array to store books

let myLibrary = [];

// Constructor for each book

class Book {
    constructor(Name, Author, Pages, Read) {
        this.Name = Name;
        this.Author = Author;
        this.Pages = Pages;
        this.Read = Read;
    }
}

// Function to add a book to the array

function addToColection(Name, Author, Pages, Read) {
    let book = new Book(Name, Author, Pages, Read);
    if(myLibrary.length <= 9) {
    myLibrary.push(book);
    }
}

addToColection('Lord of the rings', 'Tolkien', '222', 'yes');


// Function to display the form to add a book when clicking on the Add Book button

function showForm() {
    const formButton = document.getElementById('add');
    formButton.addEventListener('click', (e) => {
        const form = document.getElementById('bookForm');
        if(form.style.display == 'none') {
        form.style.display = 'flex'; 
        } else {
        form.style.display = 'none';
    }
    })
}

showForm();

// Function to display the books list on the container.
// Used this function to add styles instead of the CSS.

function displayBook(){

    const books = document.querySelector('.bookContainer');

myLibrary.forEach(element => {
    const card = document.createElement('div');
    card.style.marginTop = '30px';
    card.style.width = '200px';
    card.style.height = '250px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.borderStyle = 'solid';
    card.style.borderWidth = '2px';
    card.style.borderColor = 'rgb(165, 165, 165)';
    card.style.borderRadius = '10px';
    card.classList.add('card');
    books.appendChild(card);

        for (let key in element) {
            const para = document.createElement('p');
            para.style.color = 'white';
            para.style.padding = '10px'
            para.textContent = (`${key}: ${element[key]}`);
            card.appendChild(para);
        }
        
        const buttons = document.createElement('div');
        card.appendChild(buttons);
        buttons.style.display = 'flex';
        buttons.style.justifyContent = 'center';
        buttons.style.gap = '15px';
        buttons.style.marginTop = '20px';
        const edit = document.createElement('button');
        buttons.appendChild(edit);
        const deleteButton = document.createElement('button');
        buttons.appendChild(deleteButton);
        edit.style.width = '80px';
        edit.style.height = '30px';
        edit.textContent = 'Edit';
        edit.style.cursor = 'pointer';
        deleteButton.style.width = '80px';
        deleteButton.style.height = '30px';
        deleteButton.textContent = 'Delete';
        deleteButton.style.cursor = 'pointer';
})
}

displayBook();