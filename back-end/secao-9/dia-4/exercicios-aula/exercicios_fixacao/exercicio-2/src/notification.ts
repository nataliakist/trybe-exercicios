type Notification = { type: string };

const consoleNotification: Notification = {
type: 'Console',
};

const emailNotification: Notification = {
  type: 'Email',
};

const phoneNotification: Notification = {
  type: 'Phone',
};

const notifications: Notification[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
];

export default function progressNotification(
  message: string, 
  not: Notification[] = notifications,
): void {
  not.forEach((notification) => console.log(`${notification.type}: ${message}`));
}