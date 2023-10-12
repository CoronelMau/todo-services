import connectDB from './config/db.js';
import httpServer from './config/http.js';
import "./config/env.js";
console.clear();

const bootstrap = async ()=> {

  console.log( "url", process.env.MONGODB_URL )
  await connectDB(process.env.MONGODB_URL);

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening in port: ${process.env.PORT}`);
  });
};

bootstrap();