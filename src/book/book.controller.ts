import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookIdDto } from './dto/bookid.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('genres')
  async getGenres() {
    return await this.bookService.getGenres();
  }

  @Get('discover')
  async getDiscover(@Param('type') id: number) {
    return await this.bookService.getDiscover(id);
  }

  @Post('wishlist')
  async addToWishlist(@Body() body: BookIdDto) {
    return await this.bookService.addToWishlist(body);
  }

  @Get('wishlist')
  async getWishlist() {
    return await this.bookService.getWishlist();
  }

  @Delete('wishlist/:book_id')
  async removeFromWishlist(@Param('book_id') book_id: number) {
    return await this.bookService.removeFromWishlist(book_id);
  }
}
