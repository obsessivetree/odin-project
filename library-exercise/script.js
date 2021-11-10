const newBookButton    = document.querySelector("#new-book-button");
const readButton       = document.querySelector("#read");
const saveButton       = document.querySelector("#saveNewBook");
const cancelButton     = document.querySelector("#cancel");
const form             = document.querySelector("#form");
const libDiv           = document.querySelector("#lib-div");

let isFormVisible = false;


function toggleFormDisplay() {
    if (isFormVisible){
        form.style.visibility           = "visible";
        form.style.position             = "relative";
        newBookButton.style.visibility  = "collapse";
        newBookButton.style.position    = "absolute";
        isFormVisible                   = false;
    } else {
        form.style.position             = "absolute";
        form.style.visibility           = "collapse";
        newBookButton.style.visibility  = "visible";
        newBookButton.style.position    = "relative";
        isFormVisible                   = true;
    }
}


newBookButton.addEventListener('click', toggleFormDisplay);


saveButton.addEventListener('click', function addBookToLibrary() {
    //save input from user into new Book Object
    const title        = document.getElementById("titleInp").value;
    const author       = document.getElementById("authorInp").value;
    const numOfPages   = document.getElementById("numOfPagesInp").value;
    const isRead       = document.getElementById("isReadInp").checked;
    const newBook      = new Book(title, author, numOfPages, isRead);
   
    myLibrary.push(newBook);
    
    window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    
    displayBooks();
});


cancelButton.addEventListener('click', toggleFormDisplay);


function Book(title, author, numOfPages, isRead=false) {
    this.title        = title;
    this.author       = author;
    this.numOfPages   = numOfPages;
    this.isRead       = isRead;
}


let myLibrary = [];


function displayBooks(){
    libDiv.innerHTML = '';
    myLibrary = JSON.parse(window.localStorage.getItem('myLibrary'));
    myLibrary.forEach(book => {
        const newDiv = document.createElement('div');
        newDiv.className = 'book-card';
        Object.keys(book).forEach(key => {
            const smallDiv = document.createElement('div');
            smallDiv.className = 'small-div';
            if (key === 'isRead'){
                const isReadButton = document.createElement('input');
                isReadButton.type = 'checkbox';
                smallDiv.textContent += 'Read:'
                smallDiv.appendChild(isReadButton);
                if (book[key] === true){
                    isReadButton.checked = true;
                }
                isReadButton.addEventListener('click', (e) => {
                    myLibrary.forEach(book => {
                        if (book.title === e.target.parentNode.parentNode.firstChild.textContent){
                            book.isRead = e.target.checked;
                            window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
                        }
                    })
                })
            } else {
                let text  = '';
                let pages = '';
                key === 'author' ? text = 'by ' : key === "numOfPages" ? pages = ' pages' : pages = '';
                
                book[key] !== '' ? smallDiv.textContent = text + book[key] + pages : smallDiv.textContent = '';
            }
            newDiv.appendChild(smallDiv);
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-button';
        deleteBtn.addEventListener('click', (e) => {
            const bookDiv = e.target.parentNode;
            const bookTitle = bookDiv.firstChild.textContent;
            myLibrary = myLibrary.filter(book => book.title !== bookTitle)
            window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
            bookDiv.remove();
        });
        newDiv.appendChild(deleteBtn);
        libDiv.appendChild(newDiv);
    });
};


if (window.localStorage.getItem('myLibrary') !== null) {
    displayBooks();
};