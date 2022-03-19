class Book{
    constructor(author){
        this._author = author;
    }

    //getter
    get writter(){
        return this._author;
    }

    //setter
    set writter(updateAuthor){
        this._author=updateAuthor;
    }
}

const novel = new Book("Tom Hanks");
console.log(novel.writter);

novel.writter = "N.Nabi M.Engg";

console.log(novel.writter)
