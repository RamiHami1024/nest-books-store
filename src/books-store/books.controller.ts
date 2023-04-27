import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Post('/create')
    create(@Body() createBookDto: Book) {
        this.booksService.create(createBookDto);
    }

    @Get('/all')
    getAll() {
        return this.booksService.get();
    }
}