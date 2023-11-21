// constructor function for book 
function Book(title,author,numberOfPages,numberOfCopies){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.numberOfCopies = numberOfCopies;

    Book.numberOfBooks = Book.numberOfBooks+1;
  
}
Book.numberOfBooks = 0;
Box.countOfAllbooks = 0;

function Box(height,width,length,material){
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = [];


 

 this.addBook = function (book) {
        this.content.push(book);
       Box.countOfAllbooks = (Box.countOfAllbooks + 1 )

    }
 this.countBooks = function(){
return this.content.length;
}  

this.deleteAllBooks = function(title){
    for (let i= 0 ; i<this.content.length ; i++){
        if (this.content[i].title === title ){
            this.content.splice(i,1);
        }
    }
}

this.toString = function (){
    return `Box Dimension is ${this.height} x ${this.width} x ${this.length}`
}
this.valueOf = function(){
    return Box.countOfAllbooks;
}

}

const box =new  Box ( 10,20,10,"wood")
const book1= new Book("java fundmental","vois",100,20);
const book4= new Book("java fundmental","vois",100,20);

box.addBook(book1)
box.addBook(book4)

const box2 =new  Box ( 10,20,10,"wood")
const book2 = new Book("java fundmental","vois",100,20);
box.addBook(book2)

box.deleteAllBooks("java fundmental");
console.log("numb "+ box.valueOf());
console.log("number of books is : "+box.countBooks());







