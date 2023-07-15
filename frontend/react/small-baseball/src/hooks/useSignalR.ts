import { useContext } from "react";
import { SignalRContext } from '../contexts/SignalRContext';

const useSignalR = () => {
  const context = useContext(SignalRContext);

  if (!context)
    throw new Error("SignalRContext must be placed within SignalRProvider");

  return context;
};

export default useSignalR;
