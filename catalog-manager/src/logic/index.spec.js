const logic = require('.')

const { expect } = require('chai')

describe('logic', () => {
    describe('catalog', () => {
        describe('listCatalog', () =>{
            it('should succeed with genre All', () => {
                const list = logic.listCatalog('All')
                expect(list).to.be.a('array')
                expect (list.length).to.equal(logic.books.length)
            })

            it('should succeed with an specific genre (Terror)', () => {
                const list = logic.listCatalog('Terror')
                expect(list).to.be.a('array')
                expect(list.length).to.equal(2)
            })

            it('should fail on undefined genre', () => {
                expect(() => logic.listCatalog(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty genre', () => {
                expect(() => logic.listCatalog('')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on blank genre', () => {
                expect(() => logic.listCatalog('    \t\n')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on non string genre', () => {
                expect(() => logic.listCatalog(10)).to.throw(TypeError, '10 is not a string')
            })

        })

        describe('createBook', () =>{
            it ('should succed on correct data', ()=>{
                logic.createBook('The Mummy','Terror','12')
                const list = logic.listCatalog('All')
                expect(list).to.be.a('array')
                expect (list.length).to.equal(logic.books.length)
                expect(list[3].title).to.equal('The Mummy')
            })

            it('should fail on undefined title', () => {
                expect(() => logic.createBook(undefined,'Terror','12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty title', () => {
                expect(() => logic.createBook('','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on blank title', () => {
                expect(() => logic.createBook('    \t\n','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on non string title', () => {
                expect(() => logic.createBook(10,'Terror','12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined genre', () => {
                expect(() => logic.createBook('The Mummy',undefined,'12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty genre', () => {
                expect(() => logic.createBook('The Mummy','','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on blank genre', () => {
                expect(() => logic.createBook('The Mummy','    \t\n','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on non string genre', () => {
                expect(() => logic.createBook('The Mummy',10,'12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined prize', () => {
                expect(() => logic.createBook('The Mummy','Terror',undefined)).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty prize', () => {
                expect(() => logic.createBook('The Mummy','Terror','')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on blank prize', () => {
                expect(() => logic.createBook('The Mummy','Terror','    \t\n')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on non string prize', () => {
                expect(() => logic.createBook('The Mummy','Terror',10)).to.throw(TypeError, '10 is not a string')
            })
        })

        

        describe('modifyBook', () =>{
            it ('should succed on correct data', ()=>{
                const id = logic.books[0].id
                logic.modifyBook(id, 'Falcó', 'Fiction', '15')
                expect(logic.books[0].title).to.equal('Falcó')
                expect (logic.books[0].genre).to.equal('Fiction')
                expect(logic.books[0].prize).to.equal('15')
            })

            it('should fail on undefined id', () => {
                expect(() => logic.modifyBook(undefined,'The Mummy','Terror','12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty id', () => {
                expect(() => logic.modifyBook('','The Mummy','Terror','12')).to.throw(TypeError, 'id is empty or blank')
            })
    
            it('should fail on blank id', () => {
                expect(() => logic.modifyBook('    \t\n','The Mummy','Terror','12')).to.throw(TypeError, 'id is empty or blank')
            })
    
            it('should fail on non string id', () => {
                expect(() => logic.modifyBook(10,'The Mummy','Terror','12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined title', () => {
                expect(() => logic.modifyBook('id',undefined,'Terror','12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty title', () => {
                expect(() => logic.modifyBook('id','','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on blank title', () => {
                expect(() => logic.modifyBook('id','    \t\n','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on non string title', () => {
                expect(() => logic.modifyBook('id',10,'Terror','12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined genre', () => {
                expect(() => logic.modifyBook('id','The Mummy',undefined,'12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty genre', () => {
                expect(() => logic.modifyBook('id','The Mummy','','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on blank genre', () => {
                expect(() => logic.modifyBook('id','The Mummy','    \t\n','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on non string genre', () => {
                expect(() => logic.modifyBook('id','The Mummy',10,'12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined prize', () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror',undefined)).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty prize', () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror','')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on blank prize', () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror','    \t\n')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on non string prize', () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror',10)).to.throw(TypeError, '10 is not a string')
            })
        })
        
        describe('searchById', () => {
            it('should succed on correct data', () => {
                const id = logic.books[0].id
                const book = logic.searchById(id)
                expect(book.name).to.equal(logic.books[0].name) 
            })

            it('should fail on undefined id', () => {
                expect(() => logic.searchById(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty id', () => {
                expect(() => logic.searchById('')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on blank id', () => {
                expect(() => logic.searchById('    \t\n')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on non string id', () => {
                expect(() => logic.searchById(10)).to.throw(TypeError, '10 is not a string')
            })
        })

        describe('deleteBook', ()=>{
            it('should succed on correct data', () => {
                const length = logic.books.length
                const id = logic.books[0].id
                logic.deleteBook(id)
                expect(logic.books.length).to.equal(length-1)

        })

        it('should fail on undefined id', () => {
            expect(() => logic.searchById(undefined)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on empty id', () => {
            expect(() => logic.searchById('')).to.throw(TypeError, 'id is empty or blank')
        })

        it('should fail on blank id', () => {
            expect(() => logic.searchById('    \t\n')).to.throw(TypeError, 'id is empty or blank')
        })

        it('should fail on non string id', () => {
            expect(() => logic.searchById(10)).to.throw(TypeError, '10 is not a string')
        })
    })

})

    describe('genres', () => {
        describe('listGenres', ()=>{
            it('should succed on correct data', () => {
                const list = logic.listGenres()
                expect(list).to.be.a('array')
                expect(list.length).to.be.equal(2)
            })          

            
        })

        describe('createGenre', () =>{
            it('should succed on correct data', () => {
                logic.createGenre('History')
                expect(logic.genres.length).to.equal(3)
            })

            it('should fail on undefined genre', () => {
                expect(() => logic.createGenre(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty genre', () => {
                expect(() => logic.createGenre('')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on blank genre', () => {
                expect(() => logic.createGenre('    \t\n')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on non string genre', () => {
                expect(() => logic.createGenre(10)).to.throw(TypeError, '10 is not a string')
            })
        })

        describe('deleteGenre', () =>{
            it('should succed on correct data', () => {
                const length = logic.genres.length
                const id = logic.genres[0].id
                logic.deleteGenre(id)
                expect(logic.genres.length).to.equal(length-1)
            })

            it('should fail on undefined id', () => {
                expect(() => logic.deleteGenre(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty id', () => {
                expect(() => logic.deleteGenre('')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on blank id', () => {
                expect(() => logic.deleteGenre('    \t\n')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on non string id', () => {
                expect(() => logic.deleteGenre(10)).to.throw(TypeError, '10 is not a string')
            })
        })


    })

})