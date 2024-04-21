import { useEffect } from "react";
import { SocketContext } from "./SocketContext";
import io from "socket.io-client";

const SocketProvider = (props) => {
  const _socket = io.connect("http://localhost:3001");

  useEffect(() => {
    _socket.connect();
  }, [_socket]);

  console.log("_socket", _socket);

  return (
    <SocketContext.Provider value={{ socket: _socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
