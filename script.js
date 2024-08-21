const myLibrary = [];
const cardHolder = document.querySelector(".card-holder");
const button = document.querySelector(".new-book");

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let temp = "not read yet"
        if (this.read) {
            temp = "read already"
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${temp}.`
    }
}

myLibrary.push(new Book("Hobbit1","Tolkein","234",true));
myLibrary.push(new Book("Hobbit2","Tolkein","234",true));
myLibrary.push(new Book("Hobbit3","Tolkein","234",true));
myLibrary.push(new Book("Hobbit4","Tolkein","234",true));
myLibrary.push(new Book("Hobbit5","Tolkein","234",true));
myLibrary.push(new Book("Hobbit6","Tolkein","234",true));
myLibrary.push(new Book("Hobbit7","Tolkein","234",true));
myLibrary.push(new Book("Hobbit8","Tolkein","234",true));
myLibrary.push(new Book("Hobbit9","Tolkein","234",true));
myLibrary.push(new Book("Hobbit10","Tolkein","234",true));
myLibrary.push(new Book("Hobbit11","Tolkein","234",true));
myLibrary.push(new Book("Hobbit12","Tolkein","234",true));

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title,author,pages,read));
}

function displayBooks() {
    let i = 0
    cardHolder.innerHTML = ""
    myLibrary.forEach(element => {
        let close = document.createElement("button")
        close.style.width = "50px";
        close.style.height = "20px";
        close.dataset.index = i;
        close.innerHTML = "Close";
        close.addEventListener("click", (event) => {removeSelf(close.dataset.index)});
        let card = document.createElement("div")
        card.style.height = "50px";
        card.style.width = "150px";
        card.style.textAlign = "center";
        card.style.boxShadow = "4px 4px 4px lightgray";
        card.style.border = "2px solid lightgray"
        card.style.borderRadius = "5px";
        card.style.padding = "20px";
        card.innerHTML = element.info();
        card.appendChild(close)
        cardHolder.appendChild(card);
        i += 1;
    });
}

displayBooks();

function newBook() {
    title = prompt("Enter title of book")
    author = prompt("Enter author of book")
    pages = prompt("Enter number of pages in book")
    read = prompt("Have you read this book (true/false)")
    myLibrary.push(new Book(title, author, pages, read === "true"))
    displayBooks();
}

button.addEventListener("click", (event) => {newBook()});

function removeSelf(index) {
    myLibrary.splice(index,1);
    displayBooks();
}