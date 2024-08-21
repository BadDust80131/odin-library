const myLibrary = [];
const cardHolder = document.querySelector(".card-holder")

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

myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));
myLibrary.push(new Book("Hobbit","Tolkein","234",true));

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title,author,pages,read));
}

function displayBooks() {
    myLibrary.forEach(element => {
        let card = document.createElement("div")
        card.style.height = "50px";
        card.style.width = "150px";
        card.style.textAlign = "center";
        card.style.boxShadow = "4px 4px 4px lightgray";
        card.style.border = "2px solid lightgray"
        card.style.borderRadius = "5px";
        card.style.padding = "20px";
        card.innerHTML = element.info();
        cardHolder.appendChild(card);
    });
}

displayBooks();