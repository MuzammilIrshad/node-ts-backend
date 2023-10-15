import express, { NextFunction, Request, Response } from 'express';
import router from './routes/todos';
import bodyParser from 'body-parser';
const app = express()
const port = 3000

app.use(bodyParser.json())

function middleWare(req:Request, res:Response, next:NextFunction){
  console.log("Hello world");
  if(req.query.name === "Muzammil"){
   return next()
  }else{
   return res.status(403).send("User not exist");
  }
}

app.use(middleWare);
app.use('/', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

