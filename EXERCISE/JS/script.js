
//Objects
let book1 = new Book('On Beauty','25','Zadie Smith','Romance','2005','600');
let book2 = new Book('The Mirror and the Light','13','Hilary Mantel','Historical','2018','450');


//Functions
function Book(title,isbn,author,genre,yearOfPublish,numberOfPages,bookAge){
    this.title = title;
    this.isbn = isbn;
    this.author = author;
    this.genre = genre;
    this.yearofpublish = yearOfPublish;
    this.numberofpages = numberOfPages;
    
    this.bookage =function(currentYear){
        return  currentYear - yearOfPublish
    };
}

//let books =["book1","book2",];
   

function addBooks(book){
    books.push(book);
}


let books =["book1","book2",];

document.querySelector('form button').addEventListener('click', function(event) {

  let inputs = document.querySelectorAll('form input');
  let newBooks = {};
  for (let i = 0; i < inputs.length; i++) {
    newBooks[inputs[i].name] = inputs[i].value;
    inputs[i].value = '';
  }
  myBooks.push(newBooks);
  console.log(books);
  event.preventDefault();

}, false);


console.log(books);
console.log(book1);
console.log(book1.bookage(2020));



