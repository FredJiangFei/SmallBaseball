import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { getJwt } from '../utils/jwt';

const SignalRContext = createContext<any>(null);

function SignalRProvider({ children }: { children: ReactNode }) {
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
          .catch((err: any) => {
            console.log('SignalR Disconnection Error: ', err);
          });
      }
    };
  }, [hubConnection]);

  return (
    <SignalRContext.Provider
      value={{
        hubConnection,
      }}>
      {children}
    </SignalRContext.Provider>
  );
}

export { SignalRContext, SignalRProvider };
