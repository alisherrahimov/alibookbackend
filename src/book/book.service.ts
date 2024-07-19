import { Injectable } from '@nestjs/common';
import { BookIdDto } from './dto/bookid.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'src/utils/response';
import { BookDto } from './dto/book.dto';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  async getGenres(page: number) {
    try {
      const data = await this.prismaService.category.findMany({
        take: page || 0,
      });
      return Response.success(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getDiscover(type: number, page: number) {
    try {
      switch (type) {
        case 1:
          const topSelling = await this.prismaService.book.findMany({
            orderBy: {
              purchased: 'desc',
            },
            take: page || 0,
          });
          return Response.success(topSelling);
        case 2:
          const topCharts = await this.prismaService.review.findMany({
            orderBy: {
              rating: 'desc',
            },
            take: page || 0,
          });
          return Response.success(topCharts);

        case 3:
          const topFree = await this.prismaService.book.findMany({
            take: page || 0,
            where: {
              price: 0,
            },
          });
          return Response.success(topFree);

        case 4:
          const newReleases = await this.prismaService.book.findMany({
            take: page || 0,
            orderBy: {
              created_at: 'desc',
            },
          });
          return Response.success(newReleases);
        default:
          return Response.error('Invalid type');
      }
    } catch (error) {
      throw Response.error(error);
    }
  }

  async addToWishlist(body: BookIdDto, user_id: string) {
    try {
      const data = await this.prismaService.wishlist.create({
        data: {
          book_id: body.book_id,
          user_id: user_id,
        },
      });
      return Response.success(data);
    } catch (error) {
      throw Response.error(error);
    }
  }

  async getWishlist(page: number) {
    try {
      const data = await this.prismaService.wishlist.findMany({
        take: page || 0,
      });
      return Response.success(data);
    } catch (error) {
      throw Response.error(error);
    }
  }

  async removeFromWishlist(book_id: string, user_id: string) {
    try {
      const data = await this.prismaService.wishlist.delete({
        where: {
          id: book_id,
          user_id: user_id,
        },
      });
      return Response.success(data);
    } catch (error) {
      throw Response.error(error);
    }
  }

  async getBookById(book_id: string) {
    try {
      const data = await this.prismaService.book.findUnique({
        where: {
          id: book_id,
        },
      });
      return Response.success(data);
    } catch (error) {
      throw Response.error(error);
    }
  }

  async addBook(book: BookDto) {
    try {
      const data = await this.prismaService.book.create({
        data: {
          age: book.age,
          author: book.author,
          description: book.description,
          isbn: book.isbn,
          language: book.language,
          pages: book.pages,
          price: book.price,
          purchased: book.purchased,
          release_date: book.release_date,
          title: book.title,
          Pdf: {
            connect: {
              id: book.pdf_id,
            },
          },
          BookImage: {
            connect: {
              id: book.image_id,
            },
          },
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async updateBook(book: BookDto, book_id: string) {
    try {
      const data = await this.prismaService.book.update({
        where: {
          id: book_id,
        },
        data: {
          age: book.age,
          author: book.author,
          description: book.description,
          isbn: book.isbn,
          pages: book.pages,
          price: book.price,
          purchased: book.purchased,
          release_date: book.release_date,
          title: book.title,
          Pdf: {
            connect: {
              id: book.pdf_id,
            },
          },
          BookImage: {
            connect: {
              id: book.image_id,
            },
          },
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async deleteBook(book_id: string) {
    try {
      const data = await this.prismaService.book.delete({
        where: {
          id: book_id,
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async getBookReviews(book_id: string) {
    try {
      const data = await this.prismaService.review.findMany({
        where: {
          book_id: book_id,
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async addBookReview(body: ReviewDto) {
    try {
      const data = await this.prismaService.review.create({
        data: {
          book_id: body.book_id,
          user_id: body.user_id,
          rating: body.rating,
          comment: body.comment,
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async updateBookReview(body: ReviewDto, review_id: string) {
    try {
      const data = await this.prismaService.review.update({
        where: {
          id: review_id,
        },
        data: {
          rating: body.rating,
          comment: body.comment,
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async deleteBookReview(review_id: string) {
    try {
      const data = await this.prismaService.review.delete({
        where: {
          id: review_id,
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async getBookByRating(page: number) {
    try {
      const data = await this.prismaService.review.findMany({
        orderBy: {
          rating: 'desc',
        },
        take: 10 * page || 1,
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }
}
