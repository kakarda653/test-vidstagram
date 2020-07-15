import React from 'react';

import MessageItem from './MessageItem';

const MessageList = ({
  authUser,
  messages,
}) => (
  <ul>
    {messages.map(message => (
      <MessageItem
        authUser={authUser}
        key={message.uid}
        message={message}
      />
    ))}
  </ul>
);

export default MessageList;
