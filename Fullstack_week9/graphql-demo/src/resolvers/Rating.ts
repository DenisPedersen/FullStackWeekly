import  {books } from '../data'

export default {
    book: (parent, _args, context) => context.books.find((book) => book.id === context.ratings.bookId),
}