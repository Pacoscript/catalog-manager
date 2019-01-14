const logic = {
    books : [
        {id: 'book-1547477992779', title:'Drácula', genre: 'Terror', prize: 15},
        {id: 'book-1547478000292', title:'Frankenstein', genre: 'Terror', prize: 17},
        {id: 'book-1547478004267',title: 'Kafka on the shore', genre: 'Fiction', prize: 16}
    ],

    genres : [
        {name:'Terror'},
        {name:'Fiction'}
    ],

    listCatalog(genre) {
        if (genre === 'All') return logic.books
        const list = logic.books.filter((book)=>{
            return book.genre === genre
        })
        return list
    },

    listGenres(){
        return logic.genres
    },

    createBook(title, genre, prize){
        logic.books.push({id:('book-'+Date.now()), title:title, genre:genre, prize:prize})
    },

    modifyBook(id, title, genre, prize){
        let bookToEdit = logic.searchById(id)
        bookToEdit.title=title
        bookToEdit.genre=genre
        bookToEdit.prize=prize
        
    },

    createGenre(genre){
        logic.genres.push({name:genre})
    },

    searchById(id){
        const bookToEdit = logic.books.find((book)=>{
            return book.id === id
        })
        return bookToEdit
    }

    ,deleteBook (id){
        const index = logic.books.findIndex((book)=>{
            return book.id === id
        })
        logic.books.splice(index,1)
    }

}

export default logic