import { Injectable } from '@nestjs/common';
import { BookDto } from './interfaces/dto/book';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { iMessage } from './interfaces/message';

Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

    async create(book: BookDto): Promise<iMessage<Book | string>> {
        try {
            const newBook = new this.bookModel(book);
            newBook.save();

            return {
                error: false,
                message: newBook
            }
        } catch (error) {
            return {
                error: true,
                message: error.message
            }
        }
    }

    async getAll(): Promise<iMessage<Book[] | string>> {
        try {
            const books = await this.bookModel.find().exec();

            return {
                error: false,
                message: books
            }
        } catch (error) {
            return {
                error: true,
                message: error.message
            }
        }
    }

    async get(id: string): Promise<iMessage<Book | string>> {
        try {
            const book = await this.bookModel.findById(id);

            return {
                error: false,
                message: book
            }
        } catch (error) {
            return {
                error: true,
                message: error.message
            }
        }
    }

    async update(id: string, newBookDto: BookDto): Promise<iMessage<Book | string>> {
        try {
            const book = await this.bookModel.findOneAndUpdate({ _id: id }, { ...newBookDto });

            return {
                error: false,
                message: book
            }
        } catch (error) {
            return {
                error: true,
                message: error.message
            }
        }
    }

    async delete(id: string): Promise<iMessage<Book | string>> {
        try {
            const book = await this.bookModel.findByIdAndDelete({ _id: id });

            return {
                error: false,
                message: book
            }
        } catch (error) {
            return {
                error: true,
                message: error.message
            }
        }
    }
}