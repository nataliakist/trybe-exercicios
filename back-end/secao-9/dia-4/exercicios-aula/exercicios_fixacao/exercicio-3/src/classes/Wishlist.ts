import { Book } from '../types/Book';

export default class Wishlist {
  private wishlist: Book[] = [];

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}