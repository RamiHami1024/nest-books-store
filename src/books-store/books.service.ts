import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book';

Injectable()
export class BooksService {
    private books: Book[] = []

    create(book: Book) {
        this.books.push(book);
    }

    get() {
        return this.books;
    }
}