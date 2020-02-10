import React from 'react';

const MessagesContext = React.createContext({
  messages: [],
  addMessage: () => {},
})

export default MessagesContext;