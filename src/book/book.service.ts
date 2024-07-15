import { Injectable } from '@nestjs/common';
import { BookIdDto } from './dto/bookid.dto';

@Injectable()
export class BookService {
  async getGenres() {
    return ['Fantasy', 'Science Fiction', 'Drama', 'Mystery', 'Horror'];
  }

  async getDiscover(id: number) {
    return {
      id: id,
      title: 'Discover',
    };
  }

  async addToWishlist(body: BookIdDto) {
    return {
      book_id: body.book_id,
      message: 'Added to wishlist',
    };
  }

  async getWishlist() {
    return [
      {
        book_id: 123123123,
        title: 'The Hobbit',
      },
      {
        book_id: 123123124,
        title: 'The Lord of the Rings',
      },
    ];
  }

  async removeFromWishlist(book_id: number) {
    return {
      book_id: book_id,
      message: 'Removed from wishlist',
    };
  }
}
