import React, { useState, useEffect } from "react";
import Wyszukiwarka from "./Components/Wyszukiwarka";
import { SocketContext } from "./contexts/SocketContext";
import io from "socket.io-client";

const SERVER = "http://localhost:10000/";
function App() {
  const [socket, setSocket] = useState();
  useEffect(() => {
    setSocket(io(SERVER, { transport: ["websocket"] }));
  }, []);
  return (
    <SocketContext.Provider value={[socket]}>
      <Wyszukiwarka />
    </SocketContext.Provider>
  );
}

export default App;
