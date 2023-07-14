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
    setText('');
  };

  const sendPrivateMessage = async () => {
    await hubConnection?.invoke('SendPrivateMessage', '43482b9e-e84a-44ef-b639-d9b65e082333', text);
    setText('');
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
      <Button variant="contained" onClick={sendPrivateMessage}>
        Send Private Message
      </Button>
    </>
  );
};
export default Chat;
