import React, { useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { Button } from '@mui/material';

function Chat() {
  const [messages, setMessages] = useState<any[]>([]);
  const connect = useRef<any>(null);

  useEffect(() => {
    initHub();
  }, []);

  const initHub = async () => {
    connect.current = new signalR.HubConnectionBuilder()
      .withUrl(`http://localhost:52384/Hubs/ChatRoomHub`)
      .withAutomaticReconnect()
      .build();

    await connect.current.start();
  };

  connect.current?.on('ReceiveMessage', (message: any) => {
    console.log(message);
    const newMessage = [...messages, message];
    setMessages(newMessage);
  });

  const sendMessage = async () => {
    await connect.current?.invoke('SendMessage', 'test 123');
  };

  return (
    <>
      <h1>Chat</h1>
      {messages.map((message: any) => () => <p>{message}</p>)}

      <Button variant="contained" onClick={sendMessage}>
        Send
      </Button>
    </>
  );
}

export default Chat;
