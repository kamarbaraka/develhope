/*
 Create a constructor function Book with properties title, author, and pages, and a method read that logs
 the message "I have read [title] by [author]. It is [pages] pages long."*/

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.read = function (){
        console.log('i have read', this.title, 'by', this.author, '. It is', this.pages, 'pages long.');
    }
}

let p = new Book('cars', 'kamar', 1000);
p.read();