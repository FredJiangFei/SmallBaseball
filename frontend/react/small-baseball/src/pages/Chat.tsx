import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import useSignalR from '../hooks/useSignalR';
import { useParams } from 'react-router-dom';
import chatService from '../services/chatService';

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState('');
  const { hubConnection } = useSignalR();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    getChatHistory();
  }, []);

  useEffect(() => {
    hubConnection?.on('ReceivePrivateMessage', (userId: AnalyserNode, res: any) => {
      setMessages(pre => [...pre, res]);
    });

    return () => {
      hubConnection?.off('ReceivePrivateMessage');
    };
  }, [hubConnection]);

  const getChatHistory = async () => {
    const res: any = await chatService.getChatHistory(params.id);
    setMessages(res.value);
  };

  const sendPrivateMessage = async () => {
    await hubConnection?.invoke('SendPrivateMessage', params.id, text);
    setText('');
  };

  return (
    <>
      <h1>Chat</h1>
      {messages.map((m: any) => (
        <p key={m.id}>
          {m.senderName}: {m.content}
        </p>
      ))}

      <TextField onChange={e => setText(e.target.value)} value={text} />
      <Button variant="contained" onClick={sendPrivateMessage}>
        Send Private Message
      </Button>
    </>
  );
};
export default Chat;
