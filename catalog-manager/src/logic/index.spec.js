const logic = require('.')

const { expect } = require('chai')

describe('logic', () => {
    describe('catalog', () => {
        describe('listCatalog', () =>{
            it('should succeed with genre All', async () => {
                const list = await logic.listCatalog('All')
                expect(list).to.be.a('array')
                expect (list.length).to.equal(logic.books.length)
            })

            it('should succeed with an specific genre (Terror)', async () => {
                const list = await logic.listCatalog('Terror')
                expect(list).to.be.a('array')
                expect(list.length).to.equal(2)
            })

            it('should fail on undefined genre', async () => {
                expect(() => logic.listCatalog(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty genre', async () => {
                expect(() => logic.listCatalog('')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on blank genre', async () => {
                expect(() => logic.listCatalog('    \t\n')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on non string genre', async () => {
                expect(() => logic.listCatalog(10)).to.throw(TypeError, '10 is not a string')
            })

        })

        describe('createBook', () =>{
            it ('should succed on correct data', async ()=>{
                await logic.createBook('The Mummy','Terror','12')
                const list = await logic.listCatalog('All')
                expect(list).to.be.a('array')
                expect (list.length).to.equal(logic.books.length)
                expect(list[3].title).to.equal('The Mummy')
            })

            it('should fail on undefined title', async () => {
                expect(() => logic.createBook(undefined,'Terror','12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty title', async () => {
                expect(() => logic.createBook('','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on blank title', async () => {
                expect(() => logic.createBook('    \t\n','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on non string title', async () => {
                expect(() => logic.createBook(10,'Terror','12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined genre', async () => {
                expect(() => logic.createBook('The Mummy',undefined,'12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty genre', async () => {
                expect(() => logic.createBook('The Mummy','','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on blank genre', async () => {
                expect(() => logic.createBook('The Mummy','    \t\n','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on non string genre', async () => {
                expect(() => logic.createBook('The Mummy',10,'12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined prize', async () => {
                expect(() => logic.createBook('The Mummy','Terror',undefined)).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty prize', async () => {
                expect(() => logic.createBook('The Mummy','Terror','')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on blank prize', async () => {
                expect(() => logic.createBook('The Mummy','Terror','    \t\n')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on non string prize', async () => {
                expect(() => logic.createBook('The Mummy','Terror',10)).to.throw(TypeError, '10 is not a string')
            })
        })

        

        describe('modifyBook', () =>{
            it ('should succed on correct data', async ()=>{
                const id = logic.books[0].id
                logic.modifyBook(id, 'Falcó', 'Fiction', '15')
                expect(logic.books[0].title).to.equal('Falcó')
                expect (logic.books[0].genre).to.equal('Fiction')
                expect(logic.books[0].prize).to.equal('15')
            })

            it('should fail on undefined id', async () => {
                expect(() => logic.modifyBook(undefined,'The Mummy','Terror','12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty id', async () => {
                expect(() => logic.modifyBook('','The Mummy','Terror','12')).to.throw(TypeError, 'id is empty or blank')
            })
    
            it('should fail on blank id', async () => {
                expect(() => logic.modifyBook('    \t\n','The Mummy','Terror','12')).to.throw(TypeError, 'id is empty or blank')
            })
    
            it('should fail on non string id', async () => {
                expect(() => logic.modifyBook(10,'The Mummy','Terror','12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined title', async () => {
                expect(() => logic.modifyBook('id',undefined,'Terror','12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty title', async () => {
                expect(() => logic.modifyBook('id','','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on blank title', async () => {
                expect(() => logic.modifyBook('id','    \t\n','Terror','12')).to.throw(TypeError, 'title is empty or blank')
            })
    
            it('should fail on non string title', async () => {
                expect(() => logic.modifyBook('id',10,'Terror','12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined genre', async () => {
                expect(() => logic.modifyBook('id','The Mummy',undefined,'12')).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty genre', async () => {
                expect(() => logic.modifyBook('id','The Mummy','','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on blank genre', async () => {
                expect(() => logic.modifyBook('id','The Mummy','    \t\n','12')).to.throw(TypeError, 'genre is empty or blank')
            })
    
            it('should fail on non string genre', async () => {
                expect(() => logic.modifyBook('id','The Mummy',10,'12')).to.throw(TypeError, '10 is not a string')
            })
    
            it('should fail on undefined prize', async () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror',undefined)).to.throw(TypeError, 'undefined is not a string')
            })
    
            it('should fail on empty prize', async () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror','')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on blank prize', async () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror','    \t\n')).to.throw(TypeError, 'prize is empty or blank')
            })
    
            it('should fail on non string prize', async () => {
                expect(() => logic.modifyBook('id','The Mummy','Terror',10)).to.throw(TypeError, '10 is not a string')
            })
        })
        
        describe('searchById', () => {
            it('should succed on correct data', async () => {
                const id = logic.books[0].id
                const book = await logic.searchById(id)
                expect(book.name).to.equal(logic.books[0].name) 
            })

            it('should fail on undefined id', async () => {
                expect(() => logic.searchById(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty id', async () => {
                expect(() => logic.searchById('')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on blank id', async () => {
                expect(() => logic.searchById('    \t\n')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on non string id', async () => {
                expect(() => logic.searchById(10)).to.throw(TypeError, '10 is not a string')
            })
        })

        describe('deleteBook', ()=>{
            it('should succed on correct data', async () => {
                const length = logic.books.length
                const id = logic.books[0].id
                await logic.deleteBook(id)
                expect(logic.books.length).to.equal(length-1)

        })

        it('should fail on undefined id', async () => {
            expect(() => logic.searchById(undefined)).to.throw(TypeError, 'undefined is not a string')
        })

        it('should fail on empty id', async () => {
            expect(() => logic.searchById('')).to.throw(TypeError, 'id is empty or blank')
        })

        it('should fail on blank id', async () => {
            expect(() => logic.searchById('    \t\n')).to.throw(TypeError, 'id is empty or blank')
        })

        it('should fail on non string id', async () => {
            expect(() => logic.searchById(10)).to.throw(TypeError, '10 is not a string')
        })
    })

})

    describe('genres', () => {
        describe('listGenres', ()=>{
            it('should succed on correct data', async () => {
                const list = await logic.listGenres()
                expect(list).to.be.a('array')
                expect(list.length).to.be.equal(2)
            })          

            
        })

        describe('createGenre', () =>{
            it('should succed on correct data', async () => {
                logic.createGenre('History')
                expect(logic.genres.length).to.equal(3)
            })

            it('should fail on undefined genre', async () => {
                expect(() => logic.createGenre(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty genre', async () => {
                expect(() => logic.createGenre('')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on blank genre', async () => {
                expect(() => logic.createGenre('    \t\n')).to.throw(TypeError, 'genre is empty or blank')
            })

            it('should fail on non string genre', async () => {
                expect(() => logic.createGenre(10)).to.throw(TypeError, '10 is not a string')
            })
        })

        describe('deleteGenre', () =>{
            it('should succed on correct data', async () => {
                const length = logic.genres.length
                const id = logic.genres[0].id
                logic.deleteGenre(id)
                expect(logic.genres.length).to.equal(length-1)
            })

            it('should fail on undefined id', async () => {
                expect(() => logic.deleteGenre(undefined)).to.throw(TypeError, 'undefined is not a string')
            })

            it('should fail on empty id', async () => {
                expect(() => logic.deleteGenre('')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on blank id', async () => {
                expect(() => logic.deleteGenre('    \t\n')).to.throw(TypeError, 'id is empty or blank')
            })

            it('should fail on non string id', async () => {
                expect(() => logic.deleteGenre(10)).to.throw(TypeError, '10 is not a string')
            })
        })


    })

})