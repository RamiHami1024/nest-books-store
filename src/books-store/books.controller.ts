import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './interfaces/dto/book';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Post('/create')
    async create(@Body() createBookDto: BookDto) {
        const book = await this.booksService.create(createBookDto);

        return {
            message: book
        }
    }

    @Get('/all')
    async getAll() {
        return await this.booksService.getAll();
    }

    @Get('/:id')
    async get(@Param('id') id: string) {
        return await this.booksService.get(id);
    }

    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() bookDto: BookDto
    ) {
        return await this.booksService.update(id, bookDto);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return await this.booksService.delete(id);
    }
}