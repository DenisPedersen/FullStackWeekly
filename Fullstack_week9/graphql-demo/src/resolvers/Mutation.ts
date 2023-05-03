import { books } from "../data";

export default {
    addBook: (parent, args, context) => {
      const book = {
        id: books.length+1,
        title: args.input.title,
        author: args.input.author,
      };
      books.push(book);
      return book;
    },
    deleteBook: (parent, args, context) => {
      const book = books.findIndex(x => x.id === args.id);
        const deletedBook = books.splice(book, 1);
        return deletedBook[0];   
    }
  }