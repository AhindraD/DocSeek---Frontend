import { createContext } from "react";
import io from "socket.io-client";

const socket = io("https://docseek.onrender.com/", { transports: ['websocket'] });
const UserContext = createContext(null);
//http://localhost:8000/
//https://docseek-db.up.railway.app/
<<<<<<< HEAD
//https://docseek.onrender.com
export { socket, UserContext };
=======
//https://docseek.onrender.com/
export { socket, UserContext };
>>>>>>> 4d4b6964841bfacbc0ee953a817cb9c6b6643ade
