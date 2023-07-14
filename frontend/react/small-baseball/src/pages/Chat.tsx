import React, { useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { Button, TextField } from '@mui/material';
import useSignalR from '../hooks/useSignalR';

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState('');
  const hubConnection = useSignalR((res: any) => setMessages(pre => [...pre, res]));

  const sendMessage = async () => {
    await hubConnection?.invoke('SendMessage', text);
  };

  return (
    <>
      <h1>Chat</h1>
      {messages.map((m: any) => (
        <p key={m.id}>{m.message}</p>
      ))}

      <TextField onChange={e => setText(e.target.value)} />
      <Button variant="contained" onClick={sendMessage}>
        Send
      </Button>
    </>
  );
};
export default Chat;
