// Document Elements
//TODO
    //allow for user to change read status from table view
    //make input got to table properly
    //store to local storage so info doesn't disappear


//function i found to check if i can store locally
    // function storageAvailable(type) {
    //     var storage;
    //     try {
    //         storage = window[type];
    //         var x = '__storage_test__';
    //         storage.setItem(x, x);
    //         storage.removeItem(x);
    //         return true;
    //     }
    //     catch(e) {
    //         return e instanceof DOMException && (
    //             // everything except Firefox
    //             e.code === 22 ||
    //             // Firefox
    //             e.code === 1014 ||
    //             // test name field too, because code might not be present
    //             // everything except Firefox
    //             e.name === 'QuotaExceededError' ||
    //             // Firefox
    //             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    //             // acknowledge QuotaExceededError only if there's something already stored
    //             (storage && storage.length !== 0);
    //     }
    // }

    
    // if (storageAvailable('localStorage')) {
    //     console.log('yes')
    //   }
    //   else {
    //     console.log('no')
    //   }

const newBookButton    = document.querySelector("#new-book-button");
const readButton       = document.querySelector("#read");
const saveButton       = document.querySelector("#saveNewBook");
const cancelButton     = document.querySelector("#cancel");
const form             = document.querySelector("#form");
const libDiv           = document.querySelector("#lib-div");
// const cardReadButton   = document.querySelectorAll('.card-read-button');


function toggleFormDisplay() {
    if (form.style.visibility === "collapse"){
        form.style.visibility           = "visible"
        form.style.position             = "relative"
        newBookButton.style.visibility  = "collapse";
        newBookButton.style.position    = "absolute";
    } else {
        form.style.position             = "absolute"
        form.style.visibility           = "collapse";
        newBookButton.style.visibility  = "visible";
        newBookButton.style.position    = "relative";
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


let myLibrary = [
    new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 400, false),
    new Book("Percy Jackson", "Rick Riordan", 294, true),

];


function displayBooks(){
    libDiv.innerHTML = '';
    myLibrary = JSON.parse(window.localStorage.getItem('myLibrary'));
    // console.log(window.localStorage.keys(0))
    myLibrary.forEach(book => {
        const newDiv = document.createElement('div');
        newDiv.className = 'book-card';
        Object.keys(book).forEach(key => {
            
            const smallDiv = document.createElement('div');
            smallDiv.className = 'small-div';
            if (key === 'isRead'){
                const isReadLabel = document.createElement('label');
                const isReadButton = document.createElement('input');
                isReadButton.type = 'checkbox';
                smallDiv.textContent += 'Read:'
                smallDiv.appendChild(isReadButton);
                if (book[key] === true){
                    isReadButton.checked = true;
                }
            } else {
                smallDiv.textContent = book[key];
            }
            newDiv.appendChild(smallDiv);
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-button';
        newDiv.appendChild(deleteBtn);
        libDiv.appendChild(newDiv);
        var deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.target.parentElement.remove()
                window.localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
            })
        });
    });
};


if (window.localStorage.getItem('myLibrary') !== null) {
    displayBooks();
}

// Still need to:
    // Make delete button remove book from local storage
    // Make Read checkbox on book card reflect in local storage
    // prettify