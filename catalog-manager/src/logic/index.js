const validate = require('../utils/validate')
const {books, genres} = require('../data/initialData')

const logic = {
    books : books,

    genres: genres,

    delay(){
        const limit = Date.now()+1000
        while (Date.now()<limit){}
    },

    listCatalog(genre) {
        validate([{ key: 'genre', value: genre, type: String, optional: false }])

        if (genre === 'All') return logic.books
        const list = logic.books.filter((book)=>{
            return book.genre === genre
        })
        logic.delay()
        return list
    },

    listGenres(){  
        logic.delay()
        return logic.genres
    },

    createBook(title, genre, prize){
        validate([
            { key: 'title', value: title, type: String, optional: false },
            { key: 'genre', value: genre, type: String, optional: false },
            { key: 'prize', value: prize, type: String, optional: false },
            ])
        logic.delay()
        logic.books.push({id:('book-'+Date.now()), title:title, genre:genre, prize:prize})
    },

    modifyBook(id, title, genre, prize){
        validate([
            { key: 'id', value: id, type: String, optional: false},
            { key: 'title', value: title, type: String, optional: false },
            { key: 'genre', value: genre, type: String, optional: false },
            { key: 'prize', value: prize, type: String, optional: false },
            ])
        logic.delay()
        let bookToEdit = logic.searchById(id)
        bookToEdit.title=title
        bookToEdit.genre=genre
        bookToEdit.prize=prize
        
    },

    createGenre(genre){
        validate([{ key: 'genre', value: genre, type: String, optional: false }])
        logic.delay()
        logic.genres.push({name:genre})
    },

    searchById(id){
        validate([{ key: 'id', value: id, type: String, optional: false }])
        const bookToEdit = logic.books.find((book)=>{
            return book.id === id
        })
        logic.delay()
        return bookToEdit
    }

    ,deleteBook (id){
        validate([{ key: 'id', value: id, type: String, optional: false }])
        logic.delay()
        const index = logic.books.findIndex((book)=>{
            return book.id === id
        })
        logic.books.splice(index,1)
    }

}

module.exports = logic