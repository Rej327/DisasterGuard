import { useContext } from "react";
import { SocketContext } from "../providers/SocketContext";

const useSocket = () => {
  const { socket } = useContext(SocketContext);
  return { socket };
};

export default useSocket;
