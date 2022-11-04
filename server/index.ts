require("dotenv").config();
import app from "./app";
import http from "http";

const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
