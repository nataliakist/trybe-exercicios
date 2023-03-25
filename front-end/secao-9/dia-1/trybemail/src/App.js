import { useEffect, useState } from 'react';
import { emailList } from './data/emailList';
import { UNREAD ,READ } from './data/constants';
import List from './components/List';
import Controls from './components/Controls'
import './App.css';

function App() {
  
  const [emails, setEmail] = useState(emailList)

  useEffect(() => {
    const allRead = emails.every((email) =>  email.status === READ);
    if (allRead) {
      alert ('Você leu todos seus e-mails')
    }
  }, [emails])

  const setEmailStatus = (emailId, newStatus) => {
    const updateEmail = emails.map((email) => {
      if(email.id === emailId) {
        return { ...email, status: newStatus };
      }
      return email;
    });
    setEmail(updateEmail)
  }
  
  const markAllAsRead = () => {
    const allAsRead = emails.map((m) => ({ ...m, status: READ }));
    setEmail(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsUnread = emails.map((m) => ({ ...m, status: UNREAD }));
    setEmail(allAsUnread);
  };

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <main>
        <Controls
          markAllAsRead={ markAllAsRead }
          markAllAsUnread={ markAllAsUnread }
        />
        <form>
          <fieldset>
          <List messages={ emails } setMessageStatus={ setEmailStatus } />
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default App;
