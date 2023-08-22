export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      console.log(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    console.log(
      'There are still some books to go!',
    );
  }
}