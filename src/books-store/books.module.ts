import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksModule]
})
export class BooksModule { }