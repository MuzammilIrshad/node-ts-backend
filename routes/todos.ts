import express, { Request, Response } from 'express';
import fs from 'fs';
const router = express.Router();
import path from 'path';


const filePath = path.join(__dirname, '../../db/todos.json');


function callBack(err: any, data: any){
   return data;
}

router.get('/todos', (req:Request, res:Response) => {
   
   console.log(filePath)

   fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      
      return res.status(200).json(JSON.parse(data))
   });
});

interface Todos{
   name?:String,
   id?:String,
   title?:String
}
router.post('/addTodo', (req:Request, res:Response) => {
  let todos: Todos[] = [];
   fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      todos = JSON.parse(data);
      console.log(todos);
      todos.push(req.body);
      fs.writeFile(filePath, JSON.stringify(todos), 'utf8',(err) => {
         if (err) {
           console.error('Error writing the file:', err);
         } else {
            res.status(200).send(req.body)
         }
      })
   });

 
});

router.put('/todos/:todoId', (req:Request, res:Response) => {
 
   return res.status(203)
});

export default router;