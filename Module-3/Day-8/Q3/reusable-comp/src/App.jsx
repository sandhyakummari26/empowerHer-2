import React from 'react';
import MessageCard from './MessageCard';

function App() {
  return (
    <div>
      <h2>Message Board</h2>
      <MessageCard title="Welcome!" message="Thanks for visiting our site." />
      <MessageCard title="Update" message="New features are coming soon." />
      <MessageCard title="Reminder" message="Don't forget to check your inbox." />
      <MessageCard title="Farewell" message="See you again next time!" />
    </div>
  );
}

export default App;
