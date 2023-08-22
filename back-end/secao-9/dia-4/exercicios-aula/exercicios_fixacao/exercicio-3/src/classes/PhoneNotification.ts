import Notificator from '../interfaces/Notificator';

export default class PhoneNotification implements Notificator {
  private phone: number;

  constructor(phone: number) {
    this.phone = phone;
  }

  sendNotification(message: string): void {
    console.log(
      `There is your reading goal status update by phone: ${this.phone} - ${message}`,
    );
  }
}