import React from 'react';
import Video from './Video';

const MessageItem = ({ message }) => {
  return (
    <li>
      <span>
        <strong>{message.username}</strong> {message.text}
      </span>
      {message.videoURL && <Video url={message.videoURL}/>}
    </li>
  );
};

export default MessageItem;
