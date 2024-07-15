import express from 'express';

const server = express();
server.get('/', (req: express.Request, res: express.Response )  =>{
 return res.send("VAI SE FUDER!");
})
export { server };