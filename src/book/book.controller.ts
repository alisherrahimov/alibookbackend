import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookIdDto } from './dto/bookid.dto';
import { Request } from 'express';
import { BookDto } from './dto/book.dto';
import { ReviewDto } from './dto/review.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('genres/:page')
  async getGenres(@Param('page') page: number) {
    return await this.bookService.getGenres(page);
  }

  @Get('discover/:type/:page')
  async getDiscover(@Param() params: { type: number; page: number }) {
    return await this.bookService.getDiscover(params.type, params.page);
  }

  @Post('wishlist')
  async addToWishlist(@Body() body: BookIdDto, @Req() req: Request) {
    return await this.bookService.addToWishlist(body, req.user_id);
  }

  @Get('wishlist/:page')
  async getWishlist(@Param('page') page: number) {
    return await this.bookService.getWishlist(page);
  }

  @Delete('wishlist/:book_id')
  async removeFromWishlist(@Param() book_id: string, @Req() req: Request) {
    return await this.bookService.removeFromWishlist(book_id, req.user_id);
  }

  @Get(':book_id')
  async getBookById(@Param() book_id: string) {
    return await this.bookService.getBookById(book_id);
  }

  @Post('add')
  async addBook(@Body() body: BookDto) {
    return await this.bookService.addBook(body);
  }

  @Put('update/:book_id')
  async updateBook(@Body() body: BookDto, @Param() book_id: string) {
    return await this.bookService.updateBook(body, book_id);
  }

  @Delete('delete/:book_id')
  async deleteBook(@Param() book_id: string) {
    return await this.bookService.deleteBook(book_id);
  }

  @Get('review')
  async getReview(@Param() book_id: string) {
    return await this.bookService.getBookReviews(book_id);
  }

  @Post('review')
  async addReview(@Body() body: ReviewDto) {
    return await this.bookService.addBookReview(body);
  }

  @Put('review/:review_id')
  async updateReview(@Body() body: ReviewDto, @Param() review_id: string) {
    return await this.bookService.updateBookReview(body, review_id);
  }

  @Delete('review/:review_id')
  async deleteReview(@Param() review_id: string) {
    return await this.bookService.deleteBookReview(review_id);
  }

  @Get('byRating/:page')
  async getBookByRating(@Param('page') page?: number) {
    return await this.bookService.getBookByRating(page);
  }
}
