import httpServer from './config/http.js';
import './config/env.js';
console.clear();

const bootstrap = async ()=> {

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening in port: ${process.env.PORT}`);
  });
};

bootstrap();