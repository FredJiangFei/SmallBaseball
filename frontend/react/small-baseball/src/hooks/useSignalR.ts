import { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { getJwt } from '../utils/jwt';

export default function useSignalR(onReceiveMessage: Function) {
  const [hubConnection, setHubConnection] = useState<signalR.HubConnection | null>(null);
  const jwt: any = getJwt();

  useEffect(() => {
    const options = {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
      accessTokenFactory: () => jwt,
    };
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(`http://localhost:52384/Hubs/ChatRoomHub`, options)
      .withAutomaticReconnect()
      .build();

    setHubConnection(newConnection);
  }, []);

  useEffect(() => {
    if (hubConnection) {
      hubConnection
        .start()
        .then(() => {
          console.log('SignalR Connected!');
          hubConnection?.on('ReceiveMessage', (res: any) => onReceiveMessage(res));
          hubConnection?.on('ReceivePrivateMessage', (res: any) => onReceiveMessage(res));
        })
        .catch(err => {
          console.log('SignalR Connection Error: ', err);
        });
    }

    return () => {
      if (hubConnection) {
        hubConnection
          .stop()
          .then(() => {
            console.log('SignalR Disconnected!');
          })
          .catch(err => {
            console.log('SignalR Disconnection Error: ', err);
          });
      }
    };
  }, [hubConnection]);

  return hubConnection;
}
