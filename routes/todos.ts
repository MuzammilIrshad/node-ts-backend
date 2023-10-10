import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/todos', (req:Request, res:Response) => {
   console.log(req.query);
    return res.status(200).json({body: req.query?.name})
});


router.post('/addTodo', (req:Request, res:Response) => {
  
   req.body.user = "Muzammil"; 
   return res.status(201)
});

router.put('/todos/:todoId', (req:Request, res:Response) => {
 
   return res.status(203)
});

export default router;