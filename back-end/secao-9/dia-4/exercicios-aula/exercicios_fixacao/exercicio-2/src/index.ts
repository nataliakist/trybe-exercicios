import ReadingTracker from './classes/ReadingTracker';
import Wishlist from './classes/Wishlist';

const readTracker = new ReadingTracker(20);
const wishlist = new Wishlist();

wishlist.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.addToWishlist({ book: 'Misery', author: 'Stephen King', genre: 'Thriller' });
wishlist.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(20);