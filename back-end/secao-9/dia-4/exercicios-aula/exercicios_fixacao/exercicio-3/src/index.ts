import ReadingTracker from './classes/ReadingTracker';
import Wishlist from './classes/Wishlist';
import EmailNotification from './classes/EmailNotification';
import PhoneNotification from './classes/PhoneNotification';


const emailNot = new EmailNotification('natalia@trybe.com')
const phoneNot = new PhoneNotification(999522667)

const readTracker = new ReadingTracker(20, phoneNot);
const wishlist = new Wishlist();

wishlist.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.addToWishlist({ book: 'Misery', author: 'Stephen King', genre: 'Thriller' });
wishlist.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(20);