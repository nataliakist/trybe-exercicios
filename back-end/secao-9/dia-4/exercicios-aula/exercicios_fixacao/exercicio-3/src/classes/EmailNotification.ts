import Notificator from '../interfaces/Notificator';

export default class EmailNotification implements Notificator {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  sendNotification(message: string): void {
    console.log(
      `There is your reading goal status update by email: ${this.email} - ${message}`,
    );
  }
}